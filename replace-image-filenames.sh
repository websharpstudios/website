#!/bin/bash

# Script to find all image references in HTML files and replace just the filename
# from uppercase to lowercase without changing the path

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Directory to search for HTML files
HTML_DIR="."

# Directory to search for image references
IMG_DIR="wp-content"

# File to store the list of image references
OUTPUT_FILE="image-references.txt"

# File to store the sed commands
SED_COMMANDS="image-filename-replacements.sed"

# File to store the list of files to process
FILES_TO_PROCESS="files-to-process.txt"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --html-dir)
            HTML_DIR="$2"
            shift 2
            ;;
        --img-dir)
            IMG_DIR="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --help)
            echo "Usage: $0 [--html-dir DIR] [--img-dir DIR] [--dry-run]"
            echo "  --html-dir DIR   Directory to search for HTML files (default: current directory)"
            echo "  --img-dir DIR    Directory to search for image references (default: wp-content)"
            echo "  --dry-run        Show what would be done without making changes"
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            echo "Usage: $0 [--html-dir DIR] [--img-dir DIR] [--dry-run]"
            exit 1
            ;;
    esac
done

echo -e "${YELLOW}Finding all HTML files in ${HTML_DIR}...${NC}"
find "$HTML_DIR" -type f -name "*.html" -o -name "*.htm" -o -name "*.php" > "$FILES_TO_PROCESS"
HTML_COUNT=$(wc -l < "$FILES_TO_PROCESS")
echo -e "${GREEN}Found ${HTML_COUNT} HTML files${NC}"

echo -e "${YELLOW}Finding all image references in HTML files...${NC}"
grep -r -o "${IMG_DIR}/[^\"' ]*\.\(jpg\|jpeg\|png\|gif\|webp\|svg\)" --include="*.html" --include="*.htm" --include="*.php" "$HTML_DIR" | sort | uniq > "$OUTPUT_FILE"
IMG_COUNT=$(wc -l < "$OUTPUT_FILE")
echo -e "${GREEN}Found ${IMG_COUNT} unique image references${NC}"

echo -e "${YELLOW}Generating replacement commands for uppercase filenames...${NC}"
> "$SED_COMMANDS"

# Count of files that need replacement
REPLACEMENT_COUNT=0

# Process each image reference
while IFS= read -r line; do
    # Extract just the filename with extension
    filename=$(basename "$line")
    
    # Check if filename contains uppercase letters
    if [[ "$filename" =~ [A-Z] ]]; then
        # Convert filename to lowercase
        lowercase_filename=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
        
        # Escape special characters for sed
        escaped_filename=$(echo "$filename" | sed 's/[\/&]/\\&/g')
        escaped_lowercase=$(echo "$lowercase_filename" | sed 's/[\/&]/\\&/g')
        
        # Add sed command to replace just the filename
        echo "s/$escaped_filename/$escaped_lowercase/g" >> "$SED_COMMANDS"
        
        REPLACEMENT_COUNT=$((REPLACEMENT_COUNT + 1))
        
        echo "Will replace: $filename → $lowercase_filename"
    fi
done < "$OUTPUT_FILE"

echo -e "${GREEN}Generated ${REPLACEMENT_COUNT} filename replacements${NC}"

if [ "$REPLACEMENT_COUNT" -eq 0 ]; then
    echo -e "${GREEN}No uppercase filenames found. Nothing to do.${NC}"
    rm -f "$OUTPUT_FILE" "$SED_COMMANDS" "$FILES_TO_PROCESS"
    exit 0
fi

echo -e "${YELLOW}Applying replacements to HTML files...${NC}"

# Count of modified files
MODIFIED_COUNT=0

# Process each HTML file
while IFS= read -r file; do
    if [ "$DRY_RUN" = true ]; then
        # Count how many replacements would be made
        matches=$(grep -f "$SED_COMMANDS" "$file" | wc -l)
        if [ "$matches" -gt 0 ]; then
            echo -e "${YELLOW}Would modify: $file ($matches matches)${NC}"
            MODIFIED_COUNT=$((MODIFIED_COUNT + 1))
        fi
    else
        # Make a backup of the file
        cp "$file" "${file}.bak"
        
        # Apply all replacements at once
        sed -i -f "$SED_COMMANDS" "$file"
        
        # Check if file was modified
        if ! cmp -s "$file" "${file}.bak"; then
            echo -e "${GREEN}Modified: $file${NC}"
            MODIFIED_COUNT=$((MODIFIED_COUNT + 1))
        else
            # Remove backup if no changes were made
            rm "${file}.bak"
        fi
    fi
done < "$FILES_TO_PROCESS"

echo -e "\n${GREEN}Summary:${NC}"
echo "Processed $HTML_COUNT HTML files"
echo "Found $IMG_COUNT unique image references"
echo "Generated $REPLACEMENT_COUNT filename replacements"

if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}Would modify $MODIFIED_COUNT files (dry run)${NC}"
    echo -e "${YELLOW}To apply changes, run without --dry-run${NC}"
else
    echo -e "${GREEN}Modified $MODIFIED_COUNT files${NC}"
    echo -e "${YELLOW}Backup files were created with .bak extension${NC}"
fi

# Keep the sed commands file for reference
echo -e "${YELLOW}Replacement commands saved to $SED_COMMANDS${NC}"

# Clean up temporary files
rm -f "$OUTPUT_FILE" "$FILES_TO_PROCESS"

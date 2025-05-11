#!/bin/bash

# Script to force Git to recognize case-sensitive filename changes
# This is especially useful on macOS which has a case-insensitive filesystem by default

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Directory containing the files
TARGET_DIR="wp-content/uploads/2023/06"

# Check if directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}Error: Directory $TARGET_DIR not found${NC}"
    exit 1
fi

# Parse command line arguments
DRY_RUN=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run|-n)
            DRY_RUN=true
            shift
            ;;
        --dir|-d)
            TARGET_DIR="$2"
            shift 2
            ;;
        --help|-h)
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory]"
            echo "  --dry-run, -n     Show what would be done without making changes"
            echo "  --dir, -d DIR     Directory to search for files (default: $TARGET_DIR)"
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory]"
            exit 1
            ;;
    esac
done

echo -e "${YELLOW}Finding files with case sensitivity issues in $TARGET_DIR...${NC}"

# Get a list of all files in the target directory
FILES=$(find "$TARGET_DIR" -type f | sort)

# Count of files to process
FILE_COUNT=0
PROCESSED_COUNT=0

# Create a temporary file to store the list of files to rename
TEMP_FILE=$(mktemp)

# Process each file
for file in $FILES; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    
    # Create the lowercase filename
    lowercase_filename=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
    
    # Skip if the filename is already lowercase
    if [ "$filename" = "$lowercase_filename" ]; then
        continue
    fi
    
    # Check if Git sees this as a case change
    git_status=$(git status --porcelain "$file" 2>/dev/null)
    
    # If Git doesn't see any changes, we need to force it
    if [ -z "$git_status" ]; then
        echo "$file|$dir|$filename|$lowercase_filename" >> "$TEMP_FILE"
        FILE_COUNT=$((FILE_COUNT + 1))
    fi
done

if [ "$FILE_COUNT" -eq 0 ]; then
    echo -e "${GREEN}No files with case sensitivity issues found${NC}"
    rm "$TEMP_FILE"
    exit 0
fi

echo -e "${GREEN}Found $FILE_COUNT files with case sensitivity issues${NC}"

# Process the files that need renaming
while IFS="|" read -r file dir filename lowercase_filename; do
    # Create a temporary filename to handle case-insensitive filesystems
    temp_filename="${filename}_temp_$$_${PROCESSED_COUNT}"
    temp_file="${dir}/${temp_filename}"
    new_file="${dir}/${lowercase_filename}"
    
    echo -e "Converting: ${YELLOW}$filename${NC} to ${GREEN}$lowercase_filename${NC}"
    
    if [ "$DRY_RUN" = false ]; then
        # Use git mv with a temporary name first to force Git to recognize the case change
        git mv "$file" "$temp_file"
        git mv "$temp_file" "$new_file"
    fi
    
    PROCESSED_COUNT=$((PROCESSED_COUNT + 1))
done < "$TEMP_FILE"

# Clean up
rm "$TEMP_FILE"

if [ "$DRY_RUN" = true ]; then
    echo -e "\n${YELLOW}This was a dry run. No files were modified.${NC}"
    echo -e "${YELLOW}Run without --dry-run to apply the changes.${NC}"
else
    echo -e "\n${GREEN}Committing changes to Git...${NC}"
    git commit -m "Fix case sensitivity in filenames (convert to lowercase)"
    
    echo -e "\n${GREEN}Done! $PROCESSED_COUNT files renamed to lowercase.${NC}"
    echo -e "${YELLOW}You may need to run 'git push' to publish your changes.${NC}"
fi

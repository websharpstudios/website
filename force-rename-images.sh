#!/bin/bash

# Script to force rename image files to lowercase and update Git
# This script handles case sensitivity issues on case-insensitive filesystems like macOS

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
PATTERN="*"  # Default to all files

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
        --pattern|-p)
            PATTERN="$2"
            shift 2
            ;;
        --help|-h)
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory] [--pattern|-p pattern]"
            echo "  --dry-run, -n       Show what would be done without making changes"
            echo "  --dir, -d DIR       Directory to search for files (default: $TARGET_DIR)"
            echo "  --pattern, -p PAT   File pattern to match (default: all files)"
            echo ""
            echo "Example: $0 --pattern \"*Graphic*\" --dry-run"
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory] [--pattern|-p pattern]"
            exit 1
            ;;
    esac
done

echo -e "${YELLOW}Finding files matching pattern '$PATTERN' in $TARGET_DIR...${NC}"

# Find all matching files
FILES=$(find "$TARGET_DIR" -type f -name "$PATTERN" | sort)
FILE_COUNT=$(echo "$FILES" | wc -l)

if [ "$FILE_COUNT" -eq 0 ]; then
    echo -e "${RED}No matching files found${NC}"
    exit 0
fi

echo -e "${GREEN}Found $FILE_COUNT matching files${NC}"

# Create a list of renames for git
RENAME_LIST=""
RENAMED_COUNT=0

# Process each file
for file in $FILES; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    
    # Create the new lowercase filename
    lowercase_filename=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
    
    # Skip if the filename is already lowercase
    if [ "$filename" = "$lowercase_filename" ]; then
        continue
    fi
    
    # Create a temporary filename to handle case-insensitive filesystems
    temp_filename="${filename}_temp_$$_${RENAMED_COUNT}"
    temp_file="${dir}/${temp_filename}"
    new_file="${dir}/${lowercase_filename}"
    
    echo -e "Renaming: ${YELLOW}$file${NC} to ${GREEN}$new_file${NC}"
    
    if [ "$DRY_RUN" = false ]; then
        # First move to a temporary name to force the filesystem to recognize the change
        mv "$file" "$temp_file"
        mv "$temp_file" "$new_file"
        
        # Now tell Git about the change
        git rm --cached "$file" >/dev/null 2>&1 || true
        git add "$new_file"
        
        # Add to rename list for commit message
        RENAME_LIST="$RENAME_LIST\n  $filename -> $lowercase_filename"
        RENAMED_COUNT=$((RENAMED_COUNT + 1))
    else
        RENAMED_COUNT=$((RENAMED_COUNT + 1))
    fi
done

if [ "$DRY_RUN" = true ]; then
    echo -e "\n${YELLOW}This was a dry run. Would rename $RENAMED_COUNT files.${NC}"
    echo -e "${YELLOW}Run without --dry-run to apply the changes.${NC}"
else
    if [ "$RENAMED_COUNT" -gt 0 ]; then
        # Commit the changes
        echo -e "${YELLOW}Committing changes to git...${NC}"
        git commit -m "Force rename files to lowercase$RENAME_LIST"
        
        echo -e "${GREEN}Done! $RENAMED_COUNT files renamed and committed to git.${NC}"
    else
        echo -e "${GREEN}No files needed renaming.${NC}"
    fi
fi

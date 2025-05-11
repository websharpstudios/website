#!/bin/bash

# Script to rename files from websharpstudios-Graphic to websharpstudios-graphic
# and commit the changes to git

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

echo -e "${YELLOW}Finding files matching websharpstudios-Graphic* in $TARGET_DIR...${NC}"

# Find all matching files
FILES=$(find "$TARGET_DIR" -type f -name "websharpstudios-Graphic*" | sort)
FILE_COUNT=$(echo "$FILES" | wc -l)

if [ "$FILE_COUNT" -eq 0 ]; then
    echo -e "${RED}No matching files found${NC}"
    exit 0
fi

echo -e "${GREEN}Found $FILE_COUNT files to rename${NC}"

# Create a list of renames for git
RENAME_LIST=""

# Process each file
for file in $FILES; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    
    # Create the new filename (replace Graphic with graphic)
    new_filename=$(echo "$filename" | sed 's/Graphic/graphic/g')
    new_file="$dir/$new_filename"
    
    echo -e "Renaming: ${YELLOW}$file${NC} to ${GREEN}$new_file${NC}"
    
    # Rename the file
    git mv "$file" "$new_file"
    
    # Add to rename list for commit message
    RENAME_LIST="$RENAME_LIST\n  $filename -> $new_filename"
done

# Commit the changes
echo -e "${YELLOW}Committing changes to git...${NC}"
git commit -m "Rename websharpstudios-Graphic files to lowercase websharpstudios-graphic$RENAME_LIST"

echo -e "${GREEN}Done! $FILE_COUNT files renamed and committed to git.${NC}"

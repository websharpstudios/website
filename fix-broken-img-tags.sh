#!/bin/bash

# Script to fix broken img tags in HTML files
# Uses the p312venv virtual environment

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if the virtual environment exists
if [ ! -d "p312venv" ]; then
    echo -e "${RED}Virtual environment 'p312venv' not found.${NC}"
    echo -e "${YELLOW}Please make sure you're in the correct directory.${NC}"
    exit 1
fi

# Parse command line arguments
DRY_RUN=false
DIRECTORY="."
FILE=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run|-n)
            DRY_RUN=true
            shift
            ;;
        --dir|-d)
            DIRECTORY="$2"
            shift 2
            ;;
        --file|-f)
            FILE="$2"
            shift 2
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory] [--file|-f file]"
            exit 1
            ;;
    esac
done

# Activate the virtual environment
source p312venv/bin/activate

# Install required packages
pip install beautifulsoup4 > /dev/null

# Run the script
echo -e "${YELLOW}Fixing broken img tags...${NC}"

if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}Running in dry-run mode. No files will be modified.${NC}"
    if [ -n "$FILE" ]; then
        python fix-broken-img-tags.py --file "$FILE" --dry-run
    else
        python fix-broken-img-tags.py --dir "$DIRECTORY" --dry-run
    fi
else
    if [ -n "$FILE" ]; then
        python fix-broken-img-tags.py --file "$FILE"
    else
        python fix-broken-img-tags.py --dir "$DIRECTORY"
    fi
fi

# Deactivate the virtual environment
deactivate

echo -e "${GREEN}Done!${NC}"

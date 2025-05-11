#!/bin/bash

# Script to apply image filename replacements to all HTML files
# Uses the existing image-filename-replacements.sed file

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if the sed file exists
if [ ! -f "image-filename-replacements.sed" ]; then
    echo -e "${RED}Error: image-filename-replacements.sed file not found${NC}"
    exit 1
fi

# Parse command line arguments
DRY_RUN=false
DIRECTORY="."
BACKUP=true

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
        --no-backup)
            BACKUP=false
            shift
            ;;
        --help|-h)
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory] [--no-backup]"
            echo "  --dry-run, -n     Show what would be done without making changes"
            echo "  --dir, -d DIR     Directory to search for HTML files (default: current directory)"
            echo "  --no-backup       Don't create backup files"
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            echo "Usage: $0 [--dry-run|-n] [--dir|-d directory] [--no-backup]"
            exit 1
            ;;
    esac
done

echo -e "${YELLOW}Finding all HTML files in ${DIRECTORY}...${NC}"
HTML_FILES=$(find "$DIRECTORY" -type f -name "*.html" | sort)
HTML_COUNT=$(echo "$HTML_FILES" | wc -l)
echo -e "${GREEN}Found ${HTML_COUNT} HTML files${NC}"

# Count of modified files
MODIFIED_COUNT=0

# Process each HTML file
for file in $HTML_FILES; do
    if [ "$DRY_RUN" = true ]; then
        echo -e "${YELLOW}Would process: $file${NC}"
    else
        if [ "$BACKUP" = true ]; then
            # Create backup
            cp "$file" "${file}.bak"
            echo -e "Created backup: ${file}.bak"
        fi

        # Apply sed commands
        sed -i -f  's/cropped-SR-Symbol-SQ@4x-180x180.png/cropped-sr-symbol-sq@4x-180x180.png/g' $file
        sed -i -f  's/cropped-SR-Symbol-SQ@4x-192x192.png/cropped-sr-symbol-sq@4x-192x192.png/g' $file
        sed -i -f  's/cropped-SR-Symbol-SQ@4x-270x270.png/cropped-sr-symbol-sq@4x-270x270.png/g' $file
        sed -i -f  's/cropped-SR-Symbol-SQ@4x-32x32.png/cropped-sr-symbol-sq@4x-32x32.png/g' $file
        sed -i -f  's/Seneca_Map.gif/seneca_map.gif/g' $file
        sed -i -f  's/Choose-Seneca-1024x683.jpg/choose-seneca-1024x683.jpg/g' $file
        sed -i -f  's/Choose-Seneca-1536x1024.jpg/choose-seneca-1536x1024.jpg/g' $file
        sed -i -f  's/Choose-Seneca-2048x1365.jpg/choose-seneca-2048x1365.jpg/g' $file
        sed -i -f  's/Choose-Seneca-300x200.jpg/choose-seneca-300x200.jpg/g' $file
        sed -i -f  's/Choose-Seneca-768x512.jpg/choose-seneca-768x512.jpg/g' $file
        sed -i -f  's/Choose-Seneca-scaled.jpg/choose-seneca-scaled.jpg/g' $file
        sed -i -f  's/Engineering-300x161.png/engineering-300x161.png/g' $file
        sed -i -f  's/Group-165-1-300x144.png/group-165-1-300x144.png/g' $file
        sed -i -f  's/Group-165-1.png/group-165-1.png/g' $file
        sed -i -f  's/Group-165-2.png/group-165-2.png/g' $file
        sed -i -f  's/Group-165.png/group-165.png/g' $file
        sed -i -f  's/Group-166-300x174.png/group-166-300x174.png/g' $file
        sed -i -f  's/Group-166.png/group-166.png/g' $file
        sed -i -f  's/Benjamin-LaNeave-150x150.jpg/benjamin-laneave-150x150.jpg/g' $file
        sed -i -f  's/Benjamin-LaNeave-300x300.jpg/benjamin-laneave-300x300.jpg/g' $file
        sed -i -f  's/Benjamin-LaNeave.jpg/benjamin-laneave.jpg/g' $file
        sed -i -f  's/Matt-Wallace-150x150.jpg/matt-wallace-150x150.jpg/g' $file
        sed -i -f  's/Matt-Wallace-300x300.jpg/matt-wallace-300x300.jpg/g' $file
        sed -i -f  's/Matt-Wallace.jpg/matt-wallace.jpg/g' $file
        sed -i -f  's/Judy-Wagner-150x150.jpeg/judy-wagner-150x150.jpeg/g' $file
        sed -i -f  's/Judy-Wagner-300x300.jpeg/judy-wagner-300x300.jpeg/g' $file
        sed -i -f  's/Judy-Wagner-768x768.jpeg/judy-wagner-768x768.jpeg/g' $file
        sed -i -f  's/Judy-Wagner.jpeg/judy-wagner.jpeg/g' $file
        sed -i -f  's/websharpstudios_Map.gif/websharpstudios_map.gif/g' $file
        sed -i -f  's/Group-30-150x150.png/group-30-150x150.png/g' $file
        sed -i -f  's/Group-30.png/group-30.png/g' $file
        sed -i -f  's/Group-31.png/group-31.png/g' $file
        sed -i -f  's/Group-34-1.png/group-34-1.png/g' $file
        sed -i -f  's/Group-34.png/group-34.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-1-300x281.png/websharpstudios-graphic1-1-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-1-768x721.png/websharpstudios-graphic1-1-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-1.png/websharpstudios-graphic1-1.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-10-300x281.png/websharpstudios-graphic1-10-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-10-768x721.png/websharpstudios-graphic1-10-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-10.png/websharpstudios-graphic1-10.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-11-300x281.png/websharpstudios-graphic1-11-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-11-768x721.png/websharpstudios-graphic1-11-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-11.png/websharpstudios-graphic1-11.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-12-300x281.png/websharpstudios-graphic1-12-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-12-768x721.png/websharpstudios-graphic1-12-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-12.png/websharpstudios-graphic1-12.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-13-300x281.png/websharpstudios-graphic1-13-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-13-768x721.png/websharpstudios-graphic1-13-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-13.png/websharpstudios-graphic1-13.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-14-300x281.png/websharpstudios-graphic1-14-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-14-768x721.png/websharpstudios-graphic1-14-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-14.png/websharpstudios-graphic1-14.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-2-300x281.png/websharpstudios-graphic1-2-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-2-768x721.png/websharpstudios-graphic1-2-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-2.png/websharpstudios-graphic1-2.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-3-300x281.png/websharpstudios-graphic1-3-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-3-768x721.png/websharpstudios-graphic1-3-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-3.png/websharpstudios-graphic1-3.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-4-300x281.png/websharpstudios-graphic1-4-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-4-768x721.png/websharpstudios-graphic1-4-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-4.png/websharpstudios-graphic1-4.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-5-300x281.png/websharpstudios-graphic1-5-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-5-768x721.png/websharpstudios-graphic1-5-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-5.png/websharpstudios-graphic1-5.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-6-300x281.png/websharpstudios-graphic1-6-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-6-768x721.png/websharpstudios-graphic1-6-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-6.png/websharpstudios-graphic1-6.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-7-300x281.png/websharpstudios-graphic1-7-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-7-768x721.png/websharpstudios-graphic1-7-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-7.png/websharpstudios-graphic1-7.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-8-300x281.png/websharpstudios-graphic1-8-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-8-768x721.png/websharpstudios-graphic1-8-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-8.png/websharpstudios-graphic1-8.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-9-300x281.png/websharpstudios-graphic1-9-300x281.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-9-768x721.png/websharpstudios-graphic1-9-768x721.png/g' $file
        sed -i -f  's/websharpstudios-Graphic1-9.png/websharpstudios-graphic1-9.png/g' $file
        sed -i -f  's/websharpstudios-GovtStateLocal3-1-300x281.png/websharpstudios-govtstatelocal3-1-300x281.png/g' $file
        sed -i -f  's/websharpstudios-GovtStateLocal3-1.png/websharpstudios-govtstatelocal3-1.png/g' $file
        sed -i -f  's/C-L-O-U-D-4-1024x614.png/c-l-o-u-d-4-1024x614.png/g' $file
        sed -i -f  's/C-L-O-U-D-4-200x120.png/c-l-o-u-d-4-200x120.png/g' $file
        sed -i -f  's/C-L-O-U-D-4-300x180.png/c-l-o-u-d-4-300x180.png/g' $file
        sed -i -f  's/C-L-O-U-D-4-768x461.png/c-l-o-u-d-4-768x461.png/g' $file
        sed -i -f  's/C-L-O-U-D-4.png/c-l-o-u-d-4.png/g' $file
        sed -i -f  's/App-Mod-4-1024x614.png/app-mod-4-1024x614.png/g' $file
        sed -i -f  's/App-Mod-4-200x120.png/app-mod-4-200x120.png/g' $file
        sed -i -f  's/App-Mod-4-300x180.png/app-mod-4-300x180.png/g' $file
        sed -i -f  's/App-Mod-4-768x461.png/app-mod-4-768x461.png/g' $file
        sed -i -f  's/App-Mod-4.png/app-mod-4.png/g' $file
        sed -i -f  's/Leadership-1-1024x614.png/leadership-1-1024x614.png/g' $file
        sed -i -f  's/Leadership-1-200x120.png/leadership-1-200x120.png/g' $file
        sed -i -f  's/Leadership-1-300x180.png/leadership-1-300x180.png/g' $file
        sed -i -f  's/Leadership-1-768x461.png/leadership-1-768x461.png/g' $file
        sed -i -f  's/Leadership-1.png/leadership-1.png/g' $file
        sed -i -f  's/IT-Cost-Opt-1024x614.jpg/it-cost-opt-1024x614.jpg/g' $file
        sed -i -f  's/IT-Cost-Opt-200x120.jpg/it-cost-opt-200x120.jpg/g' $file
        sed -i -f  's/IT-Cost-Opt-300x180.jpg/it-cost-opt-300x180.jpg/g' $file
        sed -i -f  's/IT-Cost-Opt-768x461.jpg/it-cost-opt-768x461.jpg/g' $file
        sed -i -f  's/IT-Cost-Opt.jpg/it-cost-opt.jpg/g' $file
        sed -i -f  's/Group-2-1-200x120.jpg/group-2-1-200x120.jpg/g' $file
        sed -i -f  's/Group-2-1-300x180.jpg/group-2-1-300x180.jpg/g' $file
        sed -i -f  's/Group-2-1-768x461.jpg/group-2-1-768x461.jpg/g' $file
        sed -i -f  's/Group-2-1.jpg/group-2-1.jpg/g' $file
        sed -i -f  's/Group-2-2-200x120.jpg/group-2-2-200x120.jpg/g' $file
        sed -i -f  's/Group-2-2-300x180.jpg/group-2-2-300x180.jpg/g' $file
        sed -i -f  's/Group-2-2-768x461.jpg/group-2-2-768x461.jpg/g' $file
        sed -i -f  's/Group-2-2.jpg/group-2-2.jpg/g' $file
        sed -i -f  's/Group-2-200x120.jpg/group-2-200x120.jpg/g' $file
        sed -i -f  's/Group-2-300x180.jpg/group-2-300x180.jpg/g' $file
        sed -i -f  's/Group-2-768x461.jpg/group-2-768x461.jpg/g' $file
        sed -i -f  's/Group-2.jpg/group-2.jpg/g' $file
        sed -i -f  's/Group-3-200x120.jpg/group-3-200x120.jpg/g' $file
        sed -i -f  's/Group-3-300x180.jpg/group-3-300x180.jpg/g' $file
        sed -i -f  's/Group-3-768x461.jpg/group-3-768x461.jpg/g' $file
        sed -i -f  's/Group-3.jpg/group-3.jpg/g' $file
        sed -i -f  's/Group-171-150x150.jpg/group-171-150x150.jpg/g' $file
        sed -i -f  's/Group-171-300x300.jpg/group-171-300x300.jpg/g' $file
        sed -i -f  's/Group-171.jpg/group-171.jpg/g' $file
        sed -i -f  's/Group-169-150x150.jpg/group-169-150x150.jpg/g' $file
        sed -i -f  's/Group-169-300x300.jpg/group-169-300x300.jpg/g' $file
        sed -i -f  's/Group-169.jpg/group-169.jpg/g' $file
        sed -i -f  's/Group-172-150x150.jpg/group-172-150x150.jpg/g' $file
        sed -i -f  's/Group-172-300x300.jpg/group-172-300x300.jpg/g' $file
        sed -i -f  's/Group-172.jpg/group-172.jpg/g' $file
        sed -i -f  's/Group-170-150x150.jpg/group-170-150x150.jpg/g' $file
        sed -i -f  's/Group-170-300x300.jpg/group-170-300x300.jpg/g' $file
        sed -i -f  's/Group-170.jpg/group-170.jpg/g' $file
        sed -i -f  's/Group-173-150x150.jpg/group-173-150x150.jpg/g' $file
        sed -i -f  's/Group-173-300x300.jpg/group-173-300x300.jpg/g' $file
        sed -i -f  's/Group-173.jpg/group-173.jpg/g' $file

        echo -e "${GREEN}Processed: $file${NC}"
        MODIFIED_COUNT=$((MODIFIED_COUNT + 1))
    fi
done

echo -e "\n${GREEN}Summary:${NC}"
if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}Would process $HTML_COUNT HTML files (dry run)${NC}"
else
    echo -e "${GREEN}Processed $MODIFIED_COUNT HTML files${NC}"
    if [ "$BACKUP" = true ]; then
        echo -e "${YELLOW}Backup files were created with .bak extension${NC}"
    fi
fi

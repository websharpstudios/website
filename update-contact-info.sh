#!/bin/bash

# Script to update contact information across the website
# - Replace phone number 703-309-2439 with 971-444-2625
# - Replace "Suite 201" with "Suite 206"

echo "Starting contact information update..."

# Count files before making changes
PHONE_FILES=$(grep -r "703-309-2439" --include="*.html" /Users/owner/website | wc -l)
SUITE_FILES=$(grep -r "Suite 201" --include="*.html" /Users/owner/website | wc -l)

echo "Found phone number in approximately $PHONE_FILES locations"
echo "Found suite number in approximately $SUITE_FILES locations"

# Update phone number in all HTML files
echo "Updating phone number from 703-309-2439 to 971-444-2625..."
find /Users/owner/website -type f -name "*.html" -exec sed -i '' 's/703-309-2439/971-444-2625/g' {} \;

# Update suite number in all HTML files
echo "Updating suite number from Suite 201 to Suite 206..."
find /Users/owner/website -type f -name "*.html" -exec sed -i '' 's/Suite 201/Suite 206/g' {} \;

# Also check for JSON files that might contain the contact info
echo "Updating phone number in JSON files..."
find /Users/owner/website -type f -name "*.json" -exec sed -i '' 's/703-309-2439/971-444-2625/g' {} \;

echo "Updating suite number in JSON files..."
find /Users/owner/website -type f -name "*.json" -exec sed -i '' 's/Suite 201/Suite 206/g' {} \;

# Count files after making changes to verify
NEW_PHONE_FILES=$(grep -r "971-444-2625" --include="*.html" /Users/owner/website | wc -l)
NEW_SUITE_FILES=$(grep -r "Suite 206" --include="*.html" /Users/owner/website | wc -l)

echo "Verification:"
echo "Phone number updated in $NEW_PHONE_FILES locations"
echo "Suite number updated in $NEW_SUITE_FILES locations"

echo "Contact information update complete!"

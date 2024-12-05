#!/bin/zsh

# Function to recursively find HTML files and print their URI location
find_html_files() {
    local dir=$1

    # Find all HTML files and print their full path
    find "$dir" -type f -name "*.html" | while read -r file; do
        uri="file://$file"
        echo "$uri"
    done
}

# Call the function with the current directory as the starting point
find_html_files "$(pwd)"

#!/usr/bin/env python3
"""
Fix broken image tags that were malformed during case-sensitivity replacement.
This script looks for and repairs malformed img tags in HTML files.
"""

import argparse
import os
import re
import sys
from pathlib import Path

def fix_img_tag(match):
    """
    Fix a malformed img tag by properly reconstructing its attributes.
    """
    full_tag = match.group(0)
    
    # Extract all attributes from the tag
    attrs = {}
    attr_pattern = re.compile(r'(\w+)=(["\'])(.*?)\2|\s+(\w+)(?:\s+|>|$)')
    
    for attr_match in attr_pattern.finditer(full_tag):
        if attr_match.group(1):  # Named attribute with value
            name = attr_match.group(1)
            value = attr_match.group(3)
            attrs[name] = value
        elif attr_match.group(4):  # Boolean attribute
            attrs[attr_match.group(4)] = True
    
    # Fix data-srcset and srcset attributes which are often broken
    for attr_name in ['data-srcset', 'srcset']:
        if attr_name in attrs:
            # Clean up duplicated URLs and fix formatting
            srcset_value = attrs[attr_name]
            
            # Remove any duplicate quotes or malformed parts
            srcset_value = re.sub(r'["\']+', '', srcset_value)
            
            # Fix common patterns of broken srcsets
            srcset_value = re.sub(r'\s+(\d+w)', r' \1', srcset_value)
            srcset_value = re.sub(r'(\d+w),\s*([^,\s]+)', r'\1, \2', srcset_value)
            
            # Remove any duplicate entries
            entries = []
            for entry in re.split(r',\s*', srcset_value):
                entry = entry.strip()
                if entry and entry not in entries:
                    entries.append(entry)
            
            attrs[attr_name] = ', '.join(entries)
    
    # Reconstruct the img tag with fixed attributes
    result = '<img'
    for name, value in attrs.items():
        if value is True:  # Boolean attribute
            result += f' {name}'
        else:
            # Ensure proper quoting
            result += f' {name}="{value}"'
    
    result += ' />'
    return result

def fix_file(file_path, dry_run=False):
    """
    Fix all malformed img tags in a file.
    """
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Find all img tags
    img_pattern = re.compile(r'<img\s+[^>]+>')
    
    # Count malformed tags (those with duplicate attributes or quotes)
    malformed_pattern = re.compile(r'<img\s+[^>]*(?:data-srcset|srcset)=["\'][^>]*["\']{2,}[^>]*>')
    malformed_tags = malformed_pattern.findall(content)
    
    if not malformed_tags:
        print(f"No malformed img tags found in {file_path}")
        return 0
    
    # Fix all img tags to be safe
    fixed_content = img_pattern.sub(fix_img_tag, content)
    
    if content == fixed_content:
        print(f"No changes needed for {file_path}")
        return 0
    
    print(f"Found {len(malformed_tags)} malformed img tags in {file_path}")
    
    if not dry_run:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed {file_path}")
    else:
        print(f"Would fix {file_path} (dry run)")
    
    return len(malformed_tags)

def find_and_fix_files(directory, extensions, dry_run=False):
    """
    Find all files with given extensions in directory and fix them.
    """
    fixed_count = 0
    file_count = 0
    
    for ext in extensions:
        for file_path in Path(directory).rglob(f"*.{ext}"):
            file_count += 1
            fixed_count += fix_file(file_path, dry_run)
    
    return file_count, fixed_count

def main():
    parser = argparse.ArgumentParser(description='Fix malformed img tags in HTML files')
    parser.add_argument('--dir', '-d', default='.', help='Directory to search for files')
    parser.add_argument('--extensions', '-e', default='html,htm,php', 
                        help='Comma-separated list of file extensions to process')
    parser.add_argument('--dry-run', '-n', action='store_true', 
                        help='Show what would be done without making changes')
    parser.add_argument('--file', '-f', help='Process a single file')
    
    args = parser.parse_args()
    
    if args.file:
        if not os.path.isfile(args.file):
            print(f"Error: File {args.file} not found")
            return 1
        
        fixed = fix_file(args.file, args.dry_run)
        print(f"Fixed {fixed} malformed img tags")
    else:
        extensions = [ext.strip() for ext in args.extensions.split(',')]
        file_count, fixed_count = find_and_fix_files(args.dir, extensions, args.dry_run)
        
        print(f"\nSummary:")
        print(f"Processed {file_count} files")
        print(f"Fixed {fixed_count} malformed img tags")
        
        if args.dry_run:
            print("This was a dry run. No files were modified.")
    
    return 0

if __name__ == '__main__':
    sys.exit(main())

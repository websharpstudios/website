# Image Filename Replacement Script

This script finds all image references in HTML files and replaces uppercase filenames with lowercase versions, without changing the directory path.

## Features

- Searches for image references in HTML, PHP, and HTM files
- Only replaces the filename portion, keeping the directory path intact
- Creates backups of modified files
- Provides a dry run option to preview changes
- Generates a detailed report of replacements

## Usage

### Basic Usage

```bash
./replace-image-filenames.sh
```

This will search for image references in the current directory and replace uppercase filenames with lowercase versions.

### Dry Run

To see what changes would be made without actually modifying any files:

```bash
./replace-image-filenames.sh --dry-run
```

### Specify Directories

You can specify the directory to search for HTML files and the directory to search for image references:

```bash
./replace-image-filenames.sh --html-dir /path/to/html --img-dir wp-content
```

### Help

```bash
./replace-image-filenames.sh --help
```

## How It Works

1. The script finds all HTML, PHP, and HTM files in the specified directory
2. It extracts all image references that contain the specified image directory path
3. For each image reference with an uppercase filename, it generates a replacement command
4. It applies these replacements to all HTML files

## Output Files

- `image-references.txt`: List of all image references found
- `image-filename-replacements.sed`: The sed commands used for replacements
- `.bak` files: Backups of modified files

## Example

If you have an HTML file with:

```html
<img src="wp-content/uploads/2023/06/Engineering.png" alt="Engineering">
```

The script will replace it with:

```html
<img src="wp-content/uploads/2023/06/engineering.png" alt="Engineering">
```

Note that only the filename is changed to lowercase, not the entire path.

## Advantages Over Full Path Replacement

- More targeted replacements, reducing the risk of errors
- Works even if the directory structure has mixed case
- Easier to understand and maintain
- Generates cleaner sed commands

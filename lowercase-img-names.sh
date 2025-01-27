#!/bin/bash

find . \! -name "*.html" -type f -print0 | while IFS= read -r -d '' file; do
  dir=$(dirname "$file")
  name=$(basename "$file")
  lower_name=$(echo "$name" | tr '[:upper:]' '[:lower:]')
``  echo "mv '$file' '$dir/$lower_name'"
done

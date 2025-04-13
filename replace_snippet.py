import os
import re

# Define the parent directory
parent_directory = '/home'  # Replace with your actual parent directory path

# Define the new snippet
new_snippet = '''<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6W1YQGZ95X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6W1YQGZ95X');
</script>'''

# Walk through the directory tree
for root, dirs, files in os.walk(parent_directory):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            # Read the content of the file
            with open(file_path, 'r') as f:
                content = f.read()

            # Replace the old snippet with the new snippet
            updated_content = re.sub(r'<!-- Google Tag Manager snippet added by Site Kit -->.*<!-- End Google Tag Manager snippet added by Site Kit -->', new_snippet, content, flags=re.DOTALL)

            # Write the updated content back to the file
            with open(file_path, 'w') as f:
                f.write(updated_content)

            print(f"Snippet replaced successfully in: {file_path}")

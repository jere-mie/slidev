import os
import sys

# Get the current directory
current_directory = os.getcwd()

# base should be passed as a CLI arg
base = None
if(len(sys.argv) > 1):
    base = sys.argv[1]

# List all files in the current directory
files = os.listdir(current_directory)

# Filter for .md files and exclude README.md
md_files = [file for file in files if file.endswith(".md") and file != "README.md"]

# Sort the list of .md files alphabetically
md_files.sort()

# Print the sorted list of .md files
os.mkdir(f"dist")

html = """
<html>
<body>
<h1>View Links to all Slideshows</h1>
<br/>
<ul>
"""


for md_file in md_files:
    os.mkdir(f"dist/{md_file[:-3]}")
    if base is not None:
        os.system(f"npm run build {md_file} --download --out dist/{md_file[:-3]} --base /{base}/{md_file[:-3]}/")
    else:
        os.system(f"npm run build {md_file} --download --out dist/{md_file[:-3]} --base /{md_file[:-3]}/")
    html+=f'<li><a href="{md_file[:-3]}/">{md_file[:-3]}</a></li>'

html+="</ul></body></html>"

with open("dist/index.html", 'w') as f:
    f.write(html)

#!/bin/bash

# Default values
DIRECTORY="."
EXTENSION="mjs"
COMMAND="webcrack"
OUTPUT_EXTENSION="js"

# Help function
print_usage() {
    echo "Usage: $0 [-d directory] [-e extension] [-c command] [-o output_extension]"
    echo "  -d: Directory to search (default: current directory)"
    echo "  -e: File extension to process (default: mjs)"
    echo "  -c: Command to run on each file (default: webcrack)"
    echo "  -o: Output file extension (default: js)"
    exit 1
}

# Parse command line arguments
while getopts "d:e:c:o:h" opt; do
    case $opt in
        d) DIRECTORY="$OPTARG";;
        e) EXTENSION="$OPTARG";;
        c) COMMAND="$OPTARG";;
        o) OUTPUT_EXTENSION="$OPTARG";;
        h) print_usage;;
        \?) print_usage;;
    esac
done

# Validate directory exists
if [ ! -d "$DIRECTORY" ]; then
    echo "Error: Directory '$DIRECTORY' does not exist"
    exit 1
fi

# Find all files with the specified extension and process them
find "$DIRECTORY" -type f -name "*.$EXTENSION" | while read -r file; do
    # Get the output filename by replacing the extension
    output_file="${file%.$EXTENSION}.$OUTPUT_EXTENSION"
    
    # Create output directory if it doesn't exist
    output_dir=$(dirname "$output_file")
    mkdir -p "$output_dir"
    
    # Process the file
    echo "Processing: $file -> $output_file"
    $COMMAND "$file" > "$output_file"
    
    # Check if command was successful
    if [ $? -eq 0 ]; then
        echo "Successfully processed: $file"
    else
        echo "Error processing: $file"
    fi
done

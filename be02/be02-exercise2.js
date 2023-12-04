const fs = require("fs");
const path = require("path");

// Get source and target directories from command-line arguments
const sourceDir = process.argv[2];
const targetDir = process.argv[3];

// Check if both directories are provided
if (!sourceDir || !targetDir) {
  console.error("Please provide both source and target directories");
  process.exit(1);
}

// Specify the extensions to filter
const extensions = [".txt", ".jpg"];

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error(`Unable to read directory: ${err}`);
    return;
  }

  // Filter for files with the specified extensions
  const filteredFiles = files.filter((file) =>
    extensions.includes(path.extname(file))
  );

  // Copy the filtered files to the target directory
  filteredFiles.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    fs.copyFile(sourcePath, targetPath, (err) => {
      if (err) {
        console.error(`Unable to copy file: ${err}`);
        return;
      }

      console.log(`Copied ${file} to ${targetDir}`);
    });
  });
});

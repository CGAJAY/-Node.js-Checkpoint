// Import the fs (file system) module to work with the file system
import fs from "fs";

// Write a file named "welcome.txt" with the content "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
	// Check for errors and throw if any occur
	if (err) throw err;
	// Log a message to the console when the file is successfully created
	console.log("File has been created");
});

// Read the content of the file "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
	// Check for errors and throw if any occur
	if (err) throw err;
	// Log the content of the file to the console
	console.log(data);
});

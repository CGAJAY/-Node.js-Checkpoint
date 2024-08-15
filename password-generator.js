// Import the generate-password module to create random passwords
import generatePassword from "generate-password";

// Generate a random password with a length of 10 characters including numbers
const password = generatePassword.generate({
	length: 10, // Password length
	numbers: true, // Include numbers in the password
});

// Log the generated password to the console
console.log(password);

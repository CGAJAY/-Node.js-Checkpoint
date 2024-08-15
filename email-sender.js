// Import the nodemailer module to send emails
import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport and your email credentials
let transporter = nodemailer.createTransport({
	service: "gmail", // Use Gmail as the email service
	auth: {
		user: "my_email@gmail.com", // my email address
		pass: "12345678", // my email password
	},
});

// Set up the email options
let mailOptions = {
	from: "my_email@gmail.com", // Sender's email address
	to: "client_email@gmail.com", // Recipient's email address
	subject: "Hello from Node.js", // Subject of the email
	text: "This is a test email from Node.js", // Body of the email
};

// Send the email using the transporter object
transporter.sendMail(mailOptions, (error, info) => {
	// Check for errors and log them if they occur
	if (error) {
		return console.log(error);
	}
	// Log a success message with the email response
	console.log("Email sent: " + info.response);
});

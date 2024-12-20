import { ADD_EMAIL_TEMPLATE, WELCOM_EMAIL } from "./emailTemplates.js"

import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mail.config.js"

export const sendVerificationEmail = async (email, verificationtoken) => {
	const recipient = [{ email }]
	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: 'Verify your email',
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationtoken),
			category: "email verification"
		})
		console.log('email sent succesfully', response)
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
}
export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: 'Welcome to our community',
			html: WELCOM_EMAIL.replace(/\[User's Name\]/g, name)
				.replace(/\[Your App Name\]/g, "Inventory SS"),
			category: "welcome email"
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};
export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
export const SendAddingUserEmail = async (userEmail, userPassword, userName, adminName) => {
	const recipient = [{ email: userEmail }];
	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Welcome to the Team! Your Login Information",
			html: ADD_EMAIL_TEMPLATE.replace(/\[USER_NAME\]/g, userName)
				.replace(/\[USER_EMAIL\]/g, userEmail)
				.replace(/\[USER_PASSWORD\]/g, userPassword)
				.replace(/\[ADMIN_NAME\]/g, adminName)
				.replace(/\[LOGIN_URL\]/g, 'http://localhost:3000/login'),// Replace with actual login URL
			category: "Welcome to the Team",
		});
		console.log("Password email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password email`, error);

		throw new Error(`Error sending password email: ${error}`);
	}
}

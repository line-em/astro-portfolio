import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const ContactForm = () => {
	const formRef = useRef();

	const sendEmail = (e) => {
		console.log("first");
		e.preventDefault();
		emailjs
			.sendForm(
				"service_wt1n5fr",
				"template_ej104ab",
				formRef.current,
				"F9Y_vVQS1p8Uu3uud"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form ref={formRef} onSubmit={(e) => sendEmail(e)}>
			<fieldset>
				<label htmlFor="name" className="text-gradient">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Your name"
					required
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email"
					pattern="[^ @]*@[^ @]*"
					required
				/>
				<p className="error-message">Please enter a valid e-mail address.</p>
			</fieldset>
			<fieldset>
				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					id="message"
					placeholder="Your message"
					required
				/>
			</fieldset>
			<fieldset className="center">
				<button
					type="submit"
					className="button_style border_style text-white extra-padding-x"
				>
					Send
				</button>
			</fieldset>
			<h2 className="text-white">Message sent! 🥳</h2>
		</form>
	);
};

export default ContactForm;

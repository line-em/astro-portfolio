import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const ContactForm = ({ code, template, api }) => {
	const formRef = useRef();
	const [sentSuccess, setSentSuccess] = useState(false);

	const sendEmail = (e) => {
		setSentSuccess(false);
		e.preventDefault();
		emailjs.sendForm(code, template, formRef.current, api).then(
			(result) => {
				e.target.reset();
				console.log(result.text);
				if (result.text === "OK") setSentSuccess(true);
			},
			(error) => {
				console.log(error.text);
				setSentSuccess(false);
			}
		);
	};

	return (
		<form ref={formRef} onSubmit={(e) => sendEmail(e)} className="headline">
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
				<label htmlFor="email" className="text-gradient">
					Email
				</label>
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
				<label htmlFor="message" className="text-gradient">
					Message
				</label>
				<textarea
					name="message"
					id="message"
					placeholder="Your message"
					required
				/>
			</fieldset>
			<fieldset className="center">
				<button type="submit">Send</button>
			</fieldset>
			{sentSuccess && <h2 className="text-white">Message sent! 🥳</h2>}
		</form>
	);
};

export default ContactForm;

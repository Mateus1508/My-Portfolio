import React, {useState,useRef} from "react";
import emailjs from "@emailjs/browser";

import { ButtonLarge } from "../Button/buttonStyle";

import { ContactContainer, Footer } from "./contactStyle";

const Contact = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	emailjs.init({
		publicKey: import.meta.env.VITE_PUBLIC_KEY,
	});
	const form = useRef();

	const sendEmail = (e) => {
		emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current)
			.then(() => {
				alert("Sua mensagem foi enviada com sucesso!");
			}, (error) => {
				console.log(error);
				alert(error.text);
			});
		e.preventDefault();
		e.target.reset();
	};    

	return (
		<ContactContainer id="Contact" data-aos="fade-right">
			<form ref={form} onSubmit={sendEmail}>
				<h2 className="title" >Envie o seu feedback!</h2>

				<label htmlFor="name">Nome</label>
				<input type="text" 
					placeholder="Seu nome"
					name="name" 
					value={formValues.name}
					onChange={handleInputChange}
					minLength="3"
					maxLength="30"
					required
				/>

				<label htmlFor="subject">Assunto</label>
				<input type="text" 
					placeholder="Convite para processo seletivo"
					name="subject" 
					value={formValues.subject}
					onChange={handleInputChange}
					minLength="3"
					maxLength="30"
				/>
          
				<label htmlFor="email">Email</label>
				<input type="email" 
					name="email" 
					value={formValues.email}
					onChange={handleInputChange}
					placeholder="example@example.com"
					minLength="11"
					maxLength="45"
					required
				/>
         
				<label htmlFor="message">Mensagem</label>
				<textarea 
					name="message"
					placeholder="Gostaria de te contatar para..."
					rows="3"
					value={formValues.message}
					onChange={handleInputChange}
					maxLength="500" 
					wrap="hard" 
					required
				/>
         
				<ButtonLarge type="submit">Enviar</ButtonLarge>
			</form>
			<Footer>
				<a href="https://github.com/Mateus1508" target="_blank" rel="noopener noreferrer">Developed by Mateus1508</a>
			</Footer>


		</ContactContainer>

	);
};

export default Contact;

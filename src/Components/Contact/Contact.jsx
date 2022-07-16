import React, {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';

import { ButtonLarge } from '../Button/buttonStyle';

import { ContactContainer, Footer } from './contactStyle';

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    setFormErrors(formValues);
    setIsSubmit(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_GMAIL_MESSAGE, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_USER_ID)
      .then(() => {
        alert('Sua mensagem foi enviada com sucesso!');
      }, (error) => {
        alert(error,message);
      });
      e.target.reset();
    }
    
    const initialValues = { email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChanges = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);

  return (
    <ContactContainer id="Contact" data-aos="fade-right">

      <form ref={form} onSubmit={sendEmail}>
          <h2 className="title" >Envie o seu feedback!</h2>

            <label for="name">Nome</label>
            <input type="text" 
            placeholder="Seu nome"
            name="name" 
            maxlength="30"
            required
            />
          
            <label for="email">Email</label>
            <input type="email" 
            name="email" 
            placeholder="example@example.com"
            maxlength="45"
            onChange={handleChanges} 
            value={formValues.email}
            required
            />
         
            <label for="message">Mensagem</label>
            <textarea 
            name="message"
            placeholder="Gostaria de te contatar para..."
            onChange={handleChanges}
            rows="3"
            maxlength="700" 
            wrap="hard" 
            value={formValues.message}
            required
            />
         
          <ButtonLarge type="submit" onClick={handleSubmit}>Enviar</ButtonLarge>
      </form>
      <Footer>
        <a href="https://github.com/Mateus1508" target="_blank" rel="noopener noreferrer">Developed by Mateus1508</a>
      </Footer>


    </ContactContainer>

  );
};

export default Contact;

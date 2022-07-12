import React, {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import {ButtonMedium} from '../Buttons/buttonStyle';

import { ContactContainer, Footer } from './contactStyle';

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));
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
    
    const validate = (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "O email não pode estar vazio!";
      } else if (!values.email.includes("@", ".")) {
        errors.email = "Formato do e-mail não aceito!";
      }
      else if (!values.message) {
        errors.message = "É necessário por uma mensagem!";
      } else if (values.message.length <= 10) {
        errors.message = "A mensagem deve ter ao menos 10 caracteres!";
      }
      return errors;
    };

  return (
    <ContactContainer id="Contact">

      <form ref={form} onSubmit={sendEmail}>
          <h2 className="title" >Envie o seu feedback!</h2>

            <label for="name">Nome</label>
            <input type="text" 
            placeholder="Seu nome"
            name="name" 
            maxlength="30"
            />
          
          
            <label for="email">Email</label>
            <input type="email" 
            name="email" 
            placeholder="example@example.com"
            maxlength="45"
            onChange={handleChanges} 
            value={formValues.email}
            />
            <span>{formErrors.email}</span>
         
          
          
            <label for="message">Mensagem</label>
            <textarea 
            name="message"
            placeholder="Gostaria de te contratar para..."
            onChange={handleChanges}
            rows="3"
            maxlength="700" 
            wrap="hard" 
            value={formValues.message}
            />
            <span>{formErrors.message}</span>
         
          <ButtonMedium className="btn"type="submit" onClick={handleSubmit}>Enviar</ButtonMedium>
      </form>
      <Footer>
        <a href="https://github.com/Mateus1508">Developed by Mateus1508</a>
      </Footer>


    </ContactContainer>

  );
};

export default Contact;
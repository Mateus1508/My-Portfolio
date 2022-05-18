import React, {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';

import { ContactContainer, Footer } from './contactStyle';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_9zqwjfz', form.current, 'LRCeCYnydtnW0i06M')
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
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
      if (!values.message) {
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
          <fieldset className="name">
            <legend>Nome</legend>
            <input type="text" 
            name="name" 
            maxlength="30"
            />
          </fieldset>
          <fieldset  className="email">
            <legend>Email</legend>
            <input type="email" 
            name="email" 
            maxlength="45"
            onChange={handleChanges} 
            value={formValues.email}
            />
            <span>{formErrors.email}</span>
          </fieldset>
          <fieldset className="message">
            <legend>Mensagem</legend>
            <textarea name="message"
            onChange={handleChanges}
            rows="3"
            maxlength="700" 
            wrap="hard" 
            value={formValues.message}
            />
            <span>{formErrors.message}</span>
          </fieldset>
          <button className="btn"type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
      <Footer>
      <div>
        <a href="https://www.linkedin.com/in/mateus-belmonte-64b6b11a3/" target="_blank">
          <img src="./images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5571987228424&text&app_absent=0" target="_blank">
          <img src="./images/whatsapp.png" alt="whatsapp" />
        </a>
        <a href="https://github.com/Mateus1508" target="_blank">
          <img src="./images/github.png" alt="Github" />
        </a>
      </div>
        <h3>Developed by Mateus1508 </h3>
      </Footer>


    </ContactContainer>

  );
};

export default Contact;
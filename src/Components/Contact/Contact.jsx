import React, {useRef, useState} from 'react';
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
    
    const [validateEmail, setValidateEmail] = useState(false);
    const [validateMessage, setValidateMessage] = useState();
    
    function handleEmail () {
      setValidateEmail(!email.includes('@'))
    }

    function EmailContent () {
      return <span color="red">Email inválido!</span>
    }

    function handleMessage () {
      setValidateMessage(!message.length() < 10)
    }

    function MessageContent () {
      return <span color="red">A mensagem deve possuir no mínimo 10 caracteres! </span>
    }

    
  
  return (
    <ContactContainer id="Contact">

      <form ref={form} onSubmit={sendEmail}>
          <h2 >Envie o seu feedback!</h2>
          <fieldset>
            <legend>Nome</legend>
            <input type="text" name="name" maxlength="30"  required/>
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" name="email" maxlength="45"required/>
            {validateEmail && <EmailContent/>}
          </fieldset>
          <fieldset>
            <legend>Mensagem</legend>
            <textarea name="message" onFocusOut={handleMessage} rows="4" maxlength="700" wrap="hard" required/>
            {validateMessage && <MessageContent/>}
          </fieldset>
          <button type="submit" onClick={handleEmail}>Enviar</button>
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
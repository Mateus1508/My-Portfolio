import React from 'react';

import { ContactContainer } from './contactStyle';

const Contact = () => {
  return (
    <ContactContainer>

      <form action="">
          <h2 >Envie o seu feedback!</h2>
          <fieldset>
            <legend>Nome</legend>
            <input type="text" className="name" maxlength="50"/>
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" className="email" maxlength="50"/>
          </fieldset>
          <fieldset>
            <legend>Mensagem</legend>
            <textarea className="message" rows="4" maxlength="700" wrap="hard" />
          </fieldset>
          <button>Enviar</button>
      </form>
      <footer>
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
      </footer>


    </ContactContainer>

  );
};

export default Contact;
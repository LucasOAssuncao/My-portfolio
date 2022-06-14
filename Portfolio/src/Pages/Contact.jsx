import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='father card'>
        <div className='about-text'>
          <h1>You can find me on</h1>
          <div className='icons-contact'>
            <a href='https://www.instagram.com/lucottoni/' target='_blank'>
              <InstagramLogo size={50} />
            </a>
            <a href='https://github.com/LucasOAssuncao' target='_blank'>
              <GithubLogo size={50} />
            </a>
            <a
              href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
              target='_blank'
            >
              <LinkedinLogo size={50} />
            </a>
          </div>
          <p>Or you can send me an email <br/>lotoni.vivo@gmail.com</p>
        </div>
      </div>
    );
  }
}

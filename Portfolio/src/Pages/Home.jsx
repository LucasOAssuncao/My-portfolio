import { InstagramLogo } from 'phosphor-react';
import React from 'react';
import foto2 from '../Image/foto2.jpg';
// import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className='father card'>
        <header>
          <nav className='nav-father'>
            <p>Sobre</p>
            <p>Conhecimentos</p>
            <p>Contato</p>
          </nav>
        </header>
        <div className='infos'>
          <div className='info-son'>
            <p>Olá, meu nome é</p>
            <h1>Lucas Otoni</h1>
            <h3>Estudante de desenvolvimento web na Trybe</h3>
            <p>Minhas redes:</p>
            <div className='icons'>
              <a href='https://www.instagram.com/lucottoni/' target='_blank'>
                <InstagramLogo size={26} />
              </a>
              <a href='https://www.instagram.com/lucottoni/' target='_blank'>
                <i className='fa-brands fa-github'></i>
              </a>
            </div>
          </div>
            <div>              
                {/* <img src={foto2} /> */}
            </div>
        </div>
      </div>
    );
  }
}

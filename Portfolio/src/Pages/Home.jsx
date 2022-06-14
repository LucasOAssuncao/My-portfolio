import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className='father card'>
        <header>
          <nav className='nav-father'>
            <Link to='/about'>
              <p>About</p>
            </Link>
            <Link to='/knowledge'>
              <p>knowledge</p>
            </Link>
            <Link to='/contact'>
            <p>Contact</p>
            </Link>
          </nav>
        </header>
        <div className='infos'>
          <div className='info-son'>
            <p>Hello, i am</p>
            <h1>Lucas Otoni</h1>
            <h3>Web development student at Trybe</h3>
            <p>Find me on</p>
            <div className='icons'>
              <a href='https://www.instagram.com/lucottoni/' target='_blank'>
                <InstagramLogo size={26} />
              </a>
              <a href='https://github.com/LucasOAssuncao' target='_blank'>
                <GithubLogo size={26} />
              </a>
              <a
                href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
                target='_blank'
              >
                <LinkedinLogo size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {conhecimento
  render() {
    return (
      <div className='father card'>
        <header>
          <nav className='nav-father'>
            <Link to='/'>
              <p>Back</p>
            </Link>
          </nav>
        </header>
        <div className='about-text'>
       <h1>Lucas Otoni Assunção</h1>
       <p>I'm from Belo Horizonte, MG, graduated in design but now I'm in the process of changing my profession to web developer by Trybe.</p>
       </div>
      </div>
    );
  }
}

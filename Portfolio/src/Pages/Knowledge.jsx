import React from 'react';
import { Link } from 'react-router-dom';
import iconJs1 from '../Image/iconJs1.svg'
import iconHtml from '../Image/iconHtml.svg'
import iconCss from '../Image/iconCss.svg'
import iconReact from '../Image/iconReact.svg'
import 'boxicons'


export default class Knowledge extends React.Component {
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
        <div className='know-icons'>
        <img className='js' src={iconJs1} />
        <img className='html' src={iconHtml} />
        <img className='css' src={iconCss} />
        <img className='react' src={iconReact} />
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}

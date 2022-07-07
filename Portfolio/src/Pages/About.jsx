import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {conhecimento
  render() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white'>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='nav-father flex align-center m-0 hover:text-slate-400 tracking-widest'>
            <Link to='/'>
              <p>Back</p>
            </Link>
          </nav>
        </header>
        <div className='about-text text-center flex-col content-center m-auto p-[10%] '>
       <h1 className='mb-[5%] text-[45px]'>Lucas Otoni Assunção</h1>
       <p className=' mb-[5%] text-[29px]'>I'm from Belo Horizonte, MG, graduated in design but now I'm in the process of changing my profession to web developer by Trybe.</p>
       </div>
      </div>
    );
  }
}

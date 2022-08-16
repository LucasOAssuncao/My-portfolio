import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white'>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='nav-father flex align-center m-0 hover:text-slate-400 tracking-widest sm:text-[20px] md:text-[45px] lg:text-[25px] xl:text-[35px]'>
            <Link to='/'>
              <p>Back</p>
            </Link>
          </nav>
        </header>
        <div className='about-text text-center flex-col content-center m-auto p-[10%] lg:p-[30px] xl:p-[65px]'>
       <h1 className='mb-[5%] sm:text-[50px] md:text-[85px] lg:text-[45px] xl:text-[55px]'>Lucas Otoni</h1>
       <p className=' mb-[5%] sm:text-[30px] md:text-[55px] lg:text-[29px] lg:mb-[15%] xl:text-[39px]'>I'm from Belo Horizonte, MG, graduated in design but now I'm in the process of changing my profession to web developer by Trybe.</p>
       </div>
      </div>
    );
  }

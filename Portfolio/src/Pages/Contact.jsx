import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white'>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='nav-father flex align-center m-0 hover:text-slate-400 tracking-widest sm:text-[20px] md:text-[45px] lg:text-[20px] xl:text-[25px] xxl:text-[35px]'>
            <Link to='/'>
              <p>Back</p>
            </Link>
          </nav>
        </header>
        <div className='about-text text-center flex-col content-center m-auto'>
          <h1 className='mb-[3%] sm:text-[40px] sm:pt-[10%] md:pt-[20%] md:text-[65px] xl:text-[45px] lg:text-[35px] lg:pt-[0] xxl:text-[55px]'>You can find me on</h1>
          <div className='icons-contact flex justify-center'>
            <a href='https://www.instagram.com/lucottoni/' className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400' target='_blank'>
              <InstagramLogo className='md:text-[80px] sm:text-[50px] lg:text-[50px] xl:text-[70px] xxl:text-[75px]' />
            </a>
            <a href='https://github.com/LucasOAssuncao' className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400' target='_blank'>
              <GithubLogo className='md:text-[80px] sm:text-[50px] lg:text-[50px] xl:text-[70px] xxl:text-[75px]' />
            </a>
            <a
              href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
              className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'
              target='_blank'
            >
              <LinkedinLogo className='md:text-[80px] sm:text-[50px] lg:text-[50px] xl:text-[70px] xxl:text-[75px]' />
            </a>
          </div>
          <div className='mb-[1%] mt-5 sm:pt-[15vh] sm:p-[10%] lg:p-[0]'>
          <p className='sm:text-[35px] md:text-[65px] lg:text-[35px] xl:text-[45px] xxl:text-[55px]'>
            Or you can send me an email <br />
          </p>
          <p className='sm:text-[25px] sm:mt-[10px] md:text-[55px] lg:text-[35px] xl:text-[45px] xxl:text-[50px]'>lucasotoni.dev@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

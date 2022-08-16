import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div className='father card flex-col text-white sm:m-[0] lg:m-auto'>
        <header className=' flex justify-end pr-[15px] pt-[5px] sm:pr-[0] sm:justify-center lg:justify-end lg:pr-[15px]'>
          <nav className='flex sm:tracking-[0px] sm:gap-3.5 sm:text-[20px] md:gap-20 md:text-[40px] lg:gap-[1.5vw] lg:tracking-widest lg:text-[20px] xl:text-[29px]'>
            <Link to='/about'>
              <p className='hover:text-slate-400'>About</p>
            </Link>
            <Link to='/knowledge'>
              <p className='hover:text-slate-400'>Knowledge</p>
            </Link>
            <Link to='/contact'>
              <p className='hover:text-slate-400'>Contact</p>
            </Link>
          </nav>
        </header>
        <div className='flex sm:flex-col sm:w-[100vw] sm:space-y-20 sm:mt-[9vh] md:mt-[30%] lg:flex-row lg:w-[100%] lg:mt-4 lg:justify-between xl:mt-[0] xxl:mt-[50px] xxl:ml-[60px]'>
          <div className='info-son pl-[70px] leading-[40px] sm:w-[100%] sm:p-[0] sm:text-center sm:flex sm:flex-col sm:gap-[20px] sm:pt-[50px] lg:w-[130%] lg:m-[28px] lg:ml-[90px] lg:mt-[22px] lg:text-left lg:gap-[10px] xl:mt-[10%]'>
            <p className="sm:text-[30px] sm:hidden md:block md:text-[40px] lg:text-[30px] xl:text-[35px]">Hello, i am</p>
            <h1 className="sm:text-[45px] md:text-[60px] lg:text-[50px] lg:leading-[45px] xl:text-[55px]">Lucas Otoni</h1>
            <h3 className="sm:text-[30px] md:text-[40px] lg:text-[30px] lg:leading-[30px] xl:text-[30px] xl:leading-[40px] lg:w-[19vw]">Front-end Developer | Back-end student at Trybe</h3>
          </div>
          <div className='h-[12vh] self-center sm:w-[15vh] sm:h-[2px] sm:bg-white lg:w-1 lg:h-[10vh] xxl:pt-[130px]'></div>
          <div className='home-right flex-col justify-center items-center w-[40%] self-center text-[27px] text-center sm:w-[100vw] xl:pt-[90px]'>
            <p className="text-[50px] md:text-[60px] lg:text-[50px] xl:text-[55px]">Find me on</p>
            <div className='icons flex justify-center animate-pulse'>
              <a href='https://www.instagram.com/lucottoni/' className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400' target='_blank'>
                <InstagramLogo className='md:text-[80px] sm:text-[50px] lg:text-[50px] xl:text-[70px]' />
              </a>
              <a href='https://github.com/LucasOAssuncao' className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'  target='_blank'>
                <GithubLogo className='md:text-[80px] sm:text-[50px] lg:text-[50px] xl:text-[70px]' />
              </a>
              <a
                href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
                className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'
                target='_blank'
              >
                <LinkedinLogo className='md:text-[80px] sm:text-[50px] lg:text-[50px] xl:text-[70px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

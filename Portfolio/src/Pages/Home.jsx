import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white'>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='text-[25px] nav-father flex align-center m-0 tracking-widest gap-3.5'>
            <Link to='/about'>
              <p className='hover:text-slate-400'>About</p>
            </Link>
            <Link to='/knowledge'>
              <p className='hover:text-slate-400'>knowledge</p>
            </Link>
            <Link to='/contact'>
              <p className='hover:text-slate-400'>Contact</p>
            </Link>
          </nav>
        </header>
        <div className='infos flex mt-[15%] w-[100%] justify-between'>
          <div className='info-son p-[28px] pl-[70px] leading-[40px] w-[60%]'>
            <p className="text-[35px]">Hello, i am</p>
            <h1 className="text-[50px]">Lucas Otoni</h1>
            <h3 className="text-[30px]">Web development student at Trybe</h3>
          </div>
          <div className='h-[12vh] border-l-[1px] self-center '></div>
          <div className='home-right flex-col justify-center items-center w-[40%] self-center text-[27px] text-center'>
            <p className="text-[50px]">Find me on</p>
            <div className='icons flex justify-center'>
              <a href='https://www.instagram.com/lucottoni/' className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400' target='_blank'>
                <InstagramLogo size={36} />
              </a>
              <a href='https://github.com/LucasOAssuncao' className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'  target='_blank'>
                <GithubLogo size={36} />
              </a>
              <a
                href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
                className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'
                target='_blank'
              >
                <LinkedinLogo size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

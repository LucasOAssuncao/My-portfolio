import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white '>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='nav-father flex align-center m-0 tracking-widest gap-2.5'>
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
        <div className='infos flex mt-[10%] w-[100%] justify-between'>
          <div className='info-son p-[28px] pl-[70px] leading-[40px] w-[60%]'>
            <p className="text-[25px]">Hello, i am</p>
            <h1 className="text-[40px]">Lucas Otoni</h1>
            <h3 className="text-[20px]">Web development student at Trybe</h3>
          </div>
          <div className='h-[12vh] border-l-[1px] self-center '></div>
          <div className='home-right flex-col justify-center items-center w-[40%] self-center text-[27px] text-center'>
            <p>Find me on</p>
            <div className='icons flex justify-center'>
              <a href='https://www.instagram.com/lucottoni/' className='decoration-0 text-white hover:text-slate-400' target='_blank'>
                <InstagramLogo size={26} />
              </a>
              <a href='https://github.com/LucasOAssuncao' className='decoration-0 text-white hover:text-slate-400'  target='_blank'>
                <GithubLogo size={26} />
              </a>
              <a
                href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
                className='decoration-0 text-white hover:text-slate-400'
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

import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
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
        <div className='about-text text-center flex-col content-center m-auto'>
          <h1 className='mb-[3%] text-[35px]'>You can find me on</h1>
          <div className='icons-contact flex justify-center'>
            <a href='https://www.instagram.com/lucottoni/' className='decoration-0 text-white hover:text-slate-400' target='_blank'>
              <InstagramLogo size={50} />
            </a>
            <a href='https://github.com/LucasOAssuncao' className='decoration-0 text-white hover:text-slate-400' target='_blank'>
              <GithubLogo size={50} />
            </a>
            <a
              href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
              className='decoration-0 text-white hover:text-slate-400'
              target='_blank'
            >
              <LinkedinLogo size={50} />
            </a>
          </div>
          <p className='mb-[1%] mt-5 text-[19px]'>
            Or you can send me an email <br />
            lotoni.vivo@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

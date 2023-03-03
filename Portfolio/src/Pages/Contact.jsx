import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white'>
      <header className=' flex justify-end pr-[15px] pt-[5px] '>
        <nav className='nav-father flex align-center m-0 hover:text-slate-400 tracking-widest sm:text-[20px] md:text-[45px] lg:text-[20px] xl:text-[25px] xxl:text-[35px]'>
          <Link to='/'>
            <p>Back</p>
          </Link>
        </nav>
      </header>
      <div className='about-text text-center flex-col content-center m-auto sm:'>
        <h1 className='sm:text-[40px] sm:pt-[15vh] md:pt-[20%] md:text-[65px] xl:text-[45px] lg:text-[35px] lg:pt-[0] xxl:text-[55px]'>
          You can find me on
        </h1>
        <div className='mb-[3%] icons-contact flex justify-center'>
          <a
            href='https://www.instagram.com/lucottoni/'
            className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'
            target='_blank'
          >
            <InstagramLogo className='md:text-[80px] sm:text-[60px] lg:text-[50px] xl:text-[70px] xxl:text-[75px]' />
          </a>
          <a
            href='https://github.com/LucasOAssuncao'
            className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'
            target='_blank'
          >
            <GithubLogo className='md:text-[80px] sm:text-[60px] lg:text-[50px] xl:text-[70px] xxl:text-[75px]' />
          </a>
          <a
            href='https://www.linkedin.com/in/lucas-otoni-5300661b2/'
            className='hover:-translate-y-1.5 decoration-0 text-white hover:text-slate-400'
            target='_blank'
          >
            <LinkedinLogo className='md:text-[80px] sm:text-[60px] lg:text-[50px] xl:text-[70px] xxl:text-[75px]' />
          </a>
        </div>
        <div className='mb-[1%] sm:pt-[10vh] sm:p-[10%] lg:p-[0] xl:pt-[2vh]'>
          <p className='mb-4 mt-4 sm:text-[40px] md:text-[65px] lg:text-[35px] xl:text-[35px] xxl:text-[55px]'>
            Or you can send me an email <br />
          </p>
          <form action='https://api.staticforms.xyz/submit' method='post'>
            <div className='flex gap-5 w-full mb-3'>
              <div className='flex flex-col gap-[5px] w-[40%]'>
                <input
                  type='hidden'
                  name='accessKey'
                  value='514817fa-27a8-4a74-b839-55d1d0dd7222'
                />
                <input
                  type='text'
                  name='email'
                  required
                  placeholder='Email'
                  className='shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
                <input
                  type='text'
                  name='subject'
                  required
                  placeholder='Subject'
                  className='shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='w-full'>
                <textarea name='message' placeholder='Message' required rows="4" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
            <input type="hidden" name="redirectTo" value="https://lucasotoni-portfolio.vercel.app/#" />
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

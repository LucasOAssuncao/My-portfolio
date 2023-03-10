import React from 'react';
import { Link } from 'react-router-dom';
import iconJs1 from '../Image/iconJs1.svg'
import iconHtml from '../Image/iconHtml.svg'
import iconCss from '../Image/iconCss.svg'
import iconReact from '../Image/iconReact.svg'
import iconRedux from '../Image/iconRedux.svg'
import iconMysql from '../Image/iconMysql.svg'
import iconDocker from '../Image/iconDocker.svg'
import iconTs from '../Image/iconTs.svg'
import iconPython from '../Image/iconPython.svg'
import iconNode from '../Image/iconNodejs.svg'
import 'boxicons'


export default function Knowledge() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white '>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='text-[25px] nav-father flex align-center m-0 hover:text-slate-400 sm:text-[20px] md:text-[45px] lg:text-[20px] xl:text-[25px] xxl:text-[35px]'>
            <Link to='/'>
              <p className='tracking-widest'>Back</p>
            </Link>
          </nav>
        </header>
        <div className='know-icons flex flex-wrap justify-center items-center h-[80%] gap-20 sm:mt-[25%] md:mt-[15%] lg:mt-[2%]'>
        <img className='js w-[80px] md:w-[100px] lg:w-[80px] xxl:w-[100px] hover:animate-bounce' src={iconJs1} />
        <img className='react w-[95px] md:w-[110px] lg:w-[90px] xxl:w-[110px] hover:animate-bounce' src={iconNode} />
        <img className='react w-[75px] md:w-[90px] lg:w-[70px] xxl:w-[100px] hover:animate-bounce' src={iconTs} />
        <img className='react w-[75px] md:w-[90px] lg:w-[70px] xxl:w-[100px] hover:animate-bounce' src={iconPython} />
        <img className='html w-[74px] md:w-[90px] lg:w-[74px] xxl:w-[95px] hover:animate-bounce' src={iconHtml} />
        <img className='css w-[87px] md:w-[110px] lg:w-[87px] xxl:w-[110px] hover:animate-bounce' src={iconCss} />
        <img className='react w-[82px] md:w-[110px] lg:w-[82px] xxl:w-[110px] hover:animate-bounce' src={iconReact} />
        <img className='react w-[70px] md:w-[90px] lg:w-[70px] xxl:w-[90px] hover:animate-bounce' src={iconRedux} />
        <img className='react w-[70px] md:w-[90px] lg:w-[70px] xxl:w-[90px] hover:animate-bounce' src={iconMysql} />
        <img className='react w-[75px] md:w-[90px] lg:w-[70px] xxl:w-[100px] hover:animate-bounce' src={iconDocker} />
        </div>
      </div>
    );
}

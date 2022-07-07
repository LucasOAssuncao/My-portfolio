import React from 'react';
import { Link } from 'react-router-dom';
import iconJs1 from '../Image/iconJs1.svg'
import iconHtml from '../Image/iconHtml.svg'
import iconCss from '../Image/iconCss.svg'
import iconReact from '../Image/iconReact.svg'
import 'boxicons'


export default class Knowledge extends React.Component {
  render() {
    return (
      <div className='father card flex-col m-auto w-[60%] h-[30vw] text-white '>
        <header className=' flex justify-end pr-[15px] pt-[5px] '>
          <nav className='nav-father flex align-center m-0 hover:text-slate-400'>
            <Link to='/'>
              <p className='tracking-widest'>Back</p>
            </Link>
          </nav>
        </header>
        <div className='know-icons flex justify-center items-center h-[80%] gap-16 mt-[2%]'>
        <img className='js w-[80px]' src={iconJs1} />
        <img className='html w-[74px]' src={iconHtml} />
        <img className='css w-[87px]' src={iconCss} />
        <img className='react w-[82px]' src={iconReact} />
        </div>
      </div>
    );
  }
}

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
      <div className='about-text text-center flex-col content-center m-auto p-[10%] lg:p-[10px] xl:p-[20px]'>
        <h1 className='inline-block border-b w-22 border-white mb-[2%] sm:text-[50px] md:text-[85px] lg:text-[45px] xl:text-[55px]'>
          About me
        </h1>
        <p className=' mb-[5%] sm:text-[20px] md:text-[25px] lg:text-[22px] lg:mb-[15%] xl:text-[29px] xxl:text-[33px]'>
        Hello, I'm a software developer based in Belo Horizonte, MG, with solid experience in functional programming, Javascript, Typescript, and Node.js. I have advanced skills in Javascript, TypeScript, Java, Git, Docker, MySQL, Sequelize, JWT, Node.js, and Express.js. Additionally, I also have experience in other stacks such as HTML5, CSS3, Jest, React, Redux, TailwindCSS, Bootstrap, React Testing Library, Mocha.js, Chai.js, and Sinon.js. My goal is to use my knowledge and skills to develop efficient and effective solutions, ensuring the quality and functionality of the final product. I am always looking to learn new technologies and stay up-to-date with the latest trends and developments in the software development industry.
        </p>
      </div>
    </div>
  );
}

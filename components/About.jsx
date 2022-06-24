import React from 'react'
import Image from 'next/image';


const About = () => {
  return (
    <>
    <div id='about' className='w-screen h-20'></div>
    <div className='w-full md:h-screen items-center py-16 px-5 mb-20'>
{/* Holds all about content */}
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
{/* Subtitle and text */}
                <p className='uppercase font-bold text-2xl tracking-widest text-[#495f4b]'>About Me</p>
                <p className='py-2 text-[#2b3637] '>Something about me.Something about me.Something about me.Something about meSomething about me.Something about meSomething about me.Something about me.Something about me.Something about me.Something about me.</p>
            </div>
{/* Picture Div */}
            <div className='w-full h-auto m-auto shadow-2xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/../public/assets/Headshot-Pic.jpeg' width='325' 
                    height='400' alt=''/>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
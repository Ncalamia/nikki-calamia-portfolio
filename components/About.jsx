import React from 'react'
import Image from 'next/image';
import HeadShotImg from'../public/assets/Headshot-Pic.jpeg'

const About = () => {
  return (
    <>
    <div id='about' className='w-screen h-20'></div>
    <div className='w-full items-center py-16 px-5 mb-20'>
{/* Holds all about content */}
      <div className= 'max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 mb-6'>
{/* Subtitle and text */}
                <p className='text-2xl mb-6 tracking-widest uppercase text-[#495f4b] font-bold'>About Me</p>
                <p className='text-[#2b3637]'>I’m a software engineer with a passion for building programs that improve daily life. With 5 years of experience in the clinical side of healthcare, I have seen first hand how technology can affect efficiency. My dedication for helping others, along with the need to solve problems, motivates me to work hard everyday. With my experience, I have acquired many transferable skills such as: functioning effectively under pressure, working cohesively in a team setting or working productively alone and learning to adapt quickly to a fast paced work environment. I am enthusiastic about learning new things and am looking for the opportunity to create something that genuinely makes an impact. </p>
            </div>
{/* Picture Div */}
            <div className='bg-[#495f4b] w-[100%] h-auto m-auto shadow-2xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={HeadShotImg} width='325' 
                    height='400' alt=''/>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
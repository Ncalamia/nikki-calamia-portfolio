import React from 'react'
import Image from 'next/image';


const About = () => {
  return (
    <div className='w-full md:h-screen items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[teal]'>About</p>
                <p className='py-2'>Something about me.Something about me.Something about me.Something about meSomething about me.Something about meSomething about me.Something about me.Something about me.Something about me.Something about me.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-black-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/../public/assets/Headshot-Pic.jpeg' width='325' 
                    height='400' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About
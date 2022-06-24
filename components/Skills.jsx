import Image from 'next/image';
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[purple]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>

{/* Grid that holds the skill icons and names */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

{/* Div that holds icon and name */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/HTML-Logo.png' 
                            width='64px' 
                            height='64px200'  
                            alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                
{/* Div that holds icon and name */}
<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            src='/../public/assets/HTML-Logo.png' 
                            width='64px' 
                            height='64px200'  
                            alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
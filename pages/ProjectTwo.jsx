import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import TDAImg from '../public/assets/projects/ToDoApp.png'
import {SiExpress, SiNodedotjs, SiMongodb} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'



const ProjectOne = () => {

    const skills = [
        {
          name: 'Express',
          logo: SiExpress
        },
        {
          name: 'Node.js',
          logo: SiNodedotjs
        },
        {
          name: 'MongoDB',
          logo: SiMongodb
        },       
        {
          name: 'Bootstrap',
          logo: FaBootstrap
        },
    ]


  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
{/* Div that holds image */}
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
         <Image
          className='absolute z-1'
          layout='fill'
          objectFit='fill'
          src={TDAImg}
          alt='Accomplished. App'
        />
{/* Div that holds home button */}
        <div className='absolute top-[5%] left-[75%] z-10 bg-[#495f4b] shadow-md shadow-gray-800 rounded-xl hover:bg-[#e2a185] z-10 sm:left-[85%]'>
{/* Home button */}
          <Link className='mt-5 mx-8' href='/#main'>
              <button className='text-white px-4 py-1.5 xs:p-3 xs:px-8'>Home</button>        
          </Link>
        </div>
{/* Div that holds Title */}
        <div className='absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Accomplished.</h2>
        </div>
      </div>
{/* Div that holds bottom content */}
      <div className='max-w-[1240px] mx-auto p-2 py-8 flex flex-col flex-wrap items-center'>
{/* Div that holds overview/description, buttons(code,site) */}
        <div className='w-full p-2'>
          <h2 className='text-[#495f4b] text-[2em] mb-4'>Overview</h2>
          <p>About the App. About the App. About the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the App</p>
{/* Div that holds buttons(code,site) */}
          <div className='flex flex-row justify-center mt-4 items-baseline'>
            <a className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl hover:bg-[#e2a185] mx-3 xs:mt-5 xs:mx-8' href='https://github.com/Ncalamia/Project-2'
              target='_blank'>
              <button className='text-white px-5 py-2 xs:p-3 xs:px-8'>Code</button>
            </a>
            <a className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl hover:bg-[#e2a185] mx-3 xs:mt-5 xs:mx-8' href='https://accomplished-to-do-app.herokuapp.com/to-do'
              target='_blank'>
              <button className='text-white px-5 py-2 xs:p-3 xs:px-8'>Go To Site</button>
            </a>
          </div>
        </div>
        <div className='flex justify-evenly flex-row flex-wrap my-6 mx-2'>
{/* Div that holds icon and name, mapping over skills array to create each skill in a card */}
                {skills.map((skill) => {
                    return (
                <div className='p-8 m-3 shadow-2xl shadow-gray-500 rounded-3xl hover:scale-110 ease-in duration-300 hover:bg-[#d28b6d] bg-[#ac6551]'>
                    <div className='flex'>
                        <div className='m-auto'>
                            <skill.logo size={40}/>
                        </div>
                        <div className=''>
                            <h3 className='text-center p-3'>{skill.name}</h3>
                        </div>
                    </div>
                </div>
                    )})}
            </div>
{/* "Back" link */}
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectOne
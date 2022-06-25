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
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
         <Image
          className='absolute z-1 object-top'
          layout='fill'
          objectFit='cover'
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
          <h2 className='p-2'>Accomplished.</h2>
          <p className='px-2'>An app that helps you accomplish tasks and goals.</p>
        </div>
      </div>
{/* Div that holds bottom content */}
      <div className='max-w-[1240px] mx-auto p-2 py-8 flex flex-col flex-wrap items-center'>
{/* Div that holds overview/description, buttons(code,site) */}
        <div className='w-full p-2'>
          <h2 className='text-[#495f4b] text-[2em] mb-4'>Overview</h2>
          <p className='text-md mx-2 sm:text-2xl'>This app was created to help increase productivity and motivation.
          <br/>
          <br/>
           Accomplished. is a Full-Stack CRUD application that breaks down tasks into smaller ones to help visualize the task at hand as more approachable. This helps reduce procrastination and gives a sense of accomplishment when checking something off of the list. The affirmation generator provides motivation every time you open the app. Use this app to not only accomplish daily tasks around the house, but also large projects too! Check it out!</p>
           <br/>
           <br/>
           <p>Disclaimer: This app is not yet launched for personal individual use. User authentication implementation is still under way, so everyone can enjoy this app with privacy. (You are still welcome to try it out!)</p>
{/* Div that holds buttons(code,site) */}
          <div className='flex flex-row justify-center mt-8 items-baseline'>
            <a className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl hover:bg-[#e2a185] mx-4 md:mx-10' href='https://github.com/Ncalamia/Project-2'
              target='_blank'>
              <button className='text-white px-5 py-2 sm:text-xl sm:px-7 sm:py-3'>Code</button>
            </a>
            <a className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl hover:bg-[#e2a185] mx-4 md:mx-10' href='https://accomplished-to-do-app.herokuapp.com/to-do'
              target='_blank'>
              <button className='text-white px-5 py-2 sm:text-xl sm:px-7 sm:py-3'>Go To Site</button>
            </a>
          </div>
        </div>
       {/* Div that holds technologies content */}
       <div className='flex justify-evenly flex-col flex-wrap w-[90%]'>
          <div>
            <p className='font-bold text-[#495f4b] text-3xl text-center mt-10 mb-5'>Technolgies Used</p>
          </div>
{/* Div that holds all of the skills  */}
          <div className='flex flex-row flex-wrap justify-evenly mb-5'>
                {skills.map((skill) => {
                    return (
// {/* Div that holds each icon and name, mapping over skills array to create each skill in a card */}
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
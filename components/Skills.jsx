import Image from 'next/image';
import React from 'react'
import {useState} from 'react'
import {SiHtml5, SiJavascript, SiExpress, SiNodedotjs, SiMongodb, SiPostgresql, SiPython, SiJquery, SiDjango, SiNextdotjs, SiMaterialui, SiTailwindcss} from 'react-icons/si'
import {AiOutlineConsoleSql, AiOutlineGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {VscJson} from 'react-icons/vsc'
import {GrReactjs} from 'react-icons/gr'
import {FaBootstrap} from 'react-icons/fa'




const Skills = () => {

    const skills = [
        {
            name: 'HTML',
            logo: SiHtml5
        },
        {
            name: 'CSS',
            logo: DiCss3
        },
        {
            name: 'JavaScript',
            logo: SiJavascript
        },
        {
            name: 'React',
            logo: GrReactjs
        },
        {
            name: 'Python',
            logo: SiPython
        },
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
            name: 'SQL',
            logo: AiOutlineConsoleSql
        },
        {
            name: 'PostgreSQL',
            logo: SiPostgresql
        },
        {
            name: 'JQuery',
            logo: SiJquery
        },
        {
            name: 'Django',
            logo: SiDjango
        },
        {
            name: 'Next.js',
            logo: SiNextdotjs
        },
        {
            name: 'JSON',
            logo: VscJson
        },
        {
            name: 'Material UI',
            logo: SiMaterialui
        },
        {
            name: 'Tailwind',
            logo: SiTailwindcss
        },
        {
            name: 'Bootstrap',
            logo: FaBootstrap
        },
        {
            name: 'GitHub',
            logo: AiOutlineGithub
        }
    ]


  return (
    <>
    <div id='skills' className='w-screen h-20'></div>
    <div className='w-full lg:h-screen px-2 py-16'>
{/* Holds all skills content */}
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
{/* Subtitle and text */}
            <p className='text-2xl mb-10 tracking-widest uppercase text-[#495f4b] font-bold'>Skills</p>

{/* Grid that holds all skill icons and names */}
            <div className='flex justify-evenly flex-row flex-wrap m-3'>
{/* Div that holds icon and name, mapping over skills array to create each skill in a card */}
                {skills.map((skill) => {
                    return (
                <div className='p-8 m-3 shadow-2xl shadow-gray-500 rounded-3xl hover:scale-110 ease-in duration-300 hover:bg-[#d28b6d] bg-[#ac6551]'>
                    <div className='flex '>
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
    </div>
    </>
  )
}

export default Skills
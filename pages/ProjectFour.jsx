import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import COImg from '../public/assets/projects/Co-Operate(2).jpg'
import {SiPostgresql, SiPython, SiDjango, SiBulma} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'


const ProjectOne = () => {

    const skills = [
        {
            name: 'React',
            logo: GrReactjs
        },
        {
            name: 'Python',
            logo: SiPython
        },
        {
            name: 'PostgreSQL',
            logo: SiPostgresql
        },
        {
            name: 'Django',
            logo: SiDjango
        },
        {
            name: 'Bulma',
            logo: SiBulma
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
            src={COImg}
            alt='Co-Operate App'
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
                <h2 className='p-2'>Co-Operate</h2>
                <p className='px-2'>An app used to organize events.</p>
            </div>
        </div>
{/* Div that holds bottom content */}
            <div className='max-w-[1240px] mx-auto p-2 py-8 flex flex-col flex-wrap items-center'>
{/* Div that holds overview/description, buttons(code,site) */}
            <div className='w-full p-2'>
                <h2 className='text-[#495f4b] text-[2em] mb-4'>Overview</h2>
                <p>Inspiration for this app came from wanting to give back to my old co-workers. As former VP of the Retention and Recruitement committee, in my past career, we were tasked with planning many events at once (baby showers, goodbye parties, retirements, etc.). This was an extremely time consuming task on top of all of the other duties of the job role. This app makes planning events easier.</p>
                <br/>
                <br/>
                <p className='text-md mx-2 sm:text-2xl'>Co-Operate is a Full-Stack CRUD application designed to allow organizations to communicate more effectively, while also increasing employee participation. The events page is accessible by employees and allows them to sign up to bring something for each event. In addition, the admin page allows for the admin (incharge of planning each event) to perform full CRUD functionality on each event (add, delete or edit an event). The updates page will serve as a platform for morale boosting announcements (employee birthdays, milestones in years of service, etc). Check it out!</p>
                <br/>
                <br/>
                <p>Disclaimer: This app is not yet launched for individual organizations to use. Futher implementation is still under way, so everyone can enjoy this app with privacy. (You are still welcome to try it out!)</p>
                <br/>
                <p><strong>Use the following login to try out the admin functionality of this app.</strong></p>
                <ul>
                    <li>Username: Admin1</li>
                    <li>Password: Admin1</li>
                </ul>
                <br/>
{/* Div that holds buttons(code,site) */}
                <div className='flex flex-row justify-center mt-8 items-baseline'>
                    <a className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl hover:bg-[#e2a185] mx-4 md:mx-10' href='https://github.com/Ncalamia/co-operate-frontend'
                    target='_blank' rel="noreferrer">
                    <button className='text-white px-5 py-2 sm:text-xl sm:px-7 sm:py-3'>Code</button>
                    </a>
                    <a className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl hover:bg-[#e2a185] mx-4 md:mx-10' href='https://co-operate-frontend.herokuapp.com/'
                    target='_blank' rel="noreferrer">
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
                    <div key={skill} className='p-8 m-3 shadow-2xl shadow-gray-500 rounded-3xl hover:scale-110 ease-in duration-300 hover:bg-[#d28b6d] bg-[#ac6551]'>
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
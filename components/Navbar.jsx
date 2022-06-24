import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFileEarmarkPerson} from 'react-icons/bs'


const Navbar = () => {

// States //

    const [nav,setNav] = useState(false)



// Hide/Show side navbar function //
    const handleNav = () => {
        setNav(!nav)
    }



    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2=xl:px-16'>
                <Image 
                    src='/../public/assets/Teal-Nav-Logo.jpg' 
                    alt='/' 
                    width='125' 
                    height='50' />
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Home</Link>
                         </li>
                         <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>About</Link>
                         </li>
                         <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Skills</Link>
                         </li>
                         <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Projects</Link>
                         </li>
                         <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Resume</Link>
                         </li>
                         <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Contact</Link>
                         </li>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            
{/* Page when side Navbar is open*/}

{/* If nav is true, make background transparent black : if not,no background */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>

{/* Side navbar */}

{/* If nav is true, "open sidebar" : if not, "hide sidebar" */}
                    <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dcd5e6] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

{/* Top of side navbar */}
                        <div className='flex w-full items-center justify-between'> 
                            <Image src='/../public/assets/Teal-Nav-Logo.jpg' width='87' height='35' alt='/' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-black-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's Build something legendary together
                            </p>
                        </div>
 {/* Middle & bottom of side navbar (links) */}
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                    <Link href='/'>
                                        <li className='py-4 text-sm'>Home</li>
                                    </Link>
                                    <Link href='/'>
                                        <li className='py-4 text-sm'>About</li>
                                    </Link>
                                    <Link href='/'>
                                        <li className='py-4 text-sm'>Skills</li>
                                    </Link>
                                    <Link href='/'>
                                        <li className='py-4 text-sm'>Projects</li>
                                    </Link>
                                    <Link href='/'>
                                        <li className='py-4 text-sm'>Contact</li>
                                    </Link>
                                    <Link href='/'>
                                        <li className='py-4 text-sm'>Resume</li>
                                    </Link>
                                </ul>

{/* Bottom div of side navbar */}
                                <div className='pt-40'>
                                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect
                                    </p>
{/* Bottom div icon links */}
                                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                        <div className='rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiOutlineGithub />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <HiOutlineMail />
                                        </div> 
                                        <div className='rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <BsFileEarmarkPerson />
                                        </div> 

                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
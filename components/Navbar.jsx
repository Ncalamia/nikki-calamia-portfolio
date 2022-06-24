import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFileEarmarkPerson} from 'react-icons/bs'
import {FcCheckmark} from 'react-icons/fc'
import { CopyToClipboard } from "react-copy-to-clipboard"


const Navbar = () => {

// States //
    const [nav,setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [showModalNav, setShowModalNav] = useState(false)
    const [showAnimatedLogo, setShowAnimatedLogo] = useState(true)

//Function for copying to clipboard
//Set state to true when text is copied, then time out at 5 seconds
  const copiedTextModalNav = () => {
      setShowModalNav(true)
      setTimeout(() => {
          setShowModalNav(false)
      }, 5000)
  }

// Hide/Show side navbar function //
    const handleNav = () => {
        setNav(!nav)
    }

    //Function for copying to clipboard
//Set state to true when text is copied, then time out at 5 seconds
// const runAnimatedLogo = () => {
//     setShowAnimatedLogo(true)
//     setTimeout(() => {
//          setShowAnimatedLogo(false)
//     }, 5000)
// }

//On page load
    useEffect(() => {
        // if window scrolls up or down 90 pixels or more, show the shadow (sets state to true), if not hide shadow (sets state to false), event listener is 
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        //Listens for scroll of page, calls handleShadow function and turns on or off shadow 
        window.addEventListener('scroll', handleShadow)
        setTimeout(() => {
            setShowAnimatedLogo(false)
       }, 3000)
    }, [])



    return (
//If shadow is true, show shadow : if false, don't show shadow
        <div className={shadow ? 'fixed w-full h-30 shadow-xl z-[100] bg-[#9e4e2d]' : 'fixed w-full h-30 z-[100] bg-[#9e4e2d]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2=xl:px-16'>
                    {showAnimatedLogo ? 
                    <Image className='z-10' src='/../public/assets/NC-Logo-Lg.gif' width='120' height='120' alt='/' />
                    : <Image className='z-0' src='/../public/assets/NC-Logo-Lg-transparent.png' width='120' height='120' alt='/' /> }
                <div>
{/* Links use the id set in the other components to control where they scroll to on the page */}
                    <ul className='hidden md:flex'>
                        <Link href='/#main'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='https://docs.google.com/document/d/1tA8OGsFIN9cYMVe5hDVOF9zLBQN4AaWEHJ3Z82HIWWo/edit?usp=sharing'>
                            <a target='_blank'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
                            </a>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            
{/* Page when side Navbar is open*/}

{/* If nav is true, make background transparent black : if not, no background */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>

{/* Side navbar */}

{/* If nav is true, "open sidebar" : if not, "hide sidebar" */}
                    <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#808a6f] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

{/* Top of side navbar */}
                        <div className='flex w-full items-center justify-between'> 
                         <Image className='z-0' src='/../public/assets/NC-Logo-Lg-transparent.png' width='130' height='130' alt='/' /> 
                            <div onClick={handleNav} className='rounded-full bg-[#c18e73] shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-[#495f4b] my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Some sort of text here
                            </p>
                        </div>
 {/* Middle & bottom of side navbar (links) */}
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                    <Link href='/'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d1dbc3]'>Home</li>
                                    </Link>
                                    <Link href='/#about'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d1dbc3]'>About</li>
                                    </Link>
                                    <Link href='/#skills'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d1dbc3]'>Skills</li>
                                    </Link>
                                    <Link href='/#projects'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d1dbc3]'>Projects</li>
                                    </Link>
                                    <Link href='/#contact'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d1dbc3]'>Contact</li>
                                    </Link>
                                    <Link href='https://docs.google.com/document/d/1tA8OGsFIN9cYMVe5hDVOF9zLBQN4AaWEHJ3Z82HIWWo/edit?usp=sharing'>
                                    <a target='_blank'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d1dbc3]'>Resume</li>
                                    </a>
                                    </Link>
                                </ul>

{/* Bottom div of side navbar */}
                                <div className='pt-40'>
                                    <p className='tracking-widest text-black-100 text-xl'>Let's Connect
                                    </p>
{/* Bottom div icon links */}
                                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
{/* Icon LinkedIn */}
                                        <div className='rounded-full bg-[#d2bc97] shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <Link href='https://www.linkedin.com/in/nikki-calamia/'>
                                            <a target='_blank'>
                                                <FaLinkedinIn />
                                            </a>
                                        </Link>
                                        </div>
{/* Icon GitHub */}
                                        <div className='rounded-full bg-[#d5a597] shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <Link href='https://github.com/Ncalamia'>
                                            <a target='_blank'>
                                                <AiOutlineGithub/>
                                            </a>
                                        </Link>
                                        </div>
{/* Icon Email */}
                                        <CopyToClipboard            text='Ncalamia2468@yahoo.com'>
                                            <div className='rounded-full bg-[#d1dbc3] shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-105 ease-in duration-300' onClick={() => copiedTextModalMain()}>    
                                                <HiOutlineMail />
                                            </div>
                                        </CopyToClipboard>
{/* Icon Resume*/}
                                        <div className='rounded-full bg-[#ccb2a4] shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <Link href='https://docs.google.com/document/d/1tA8OGsFIN9cYMVe5hDVOF9zLBQN4AaWEHJ3Z82HIWWo/edit?usp=sharing'>
                                            <a target='_blank'>
                                                <BsFileEarmarkPerson />
                                            </a>
                                        </Link>
                                        </div> 
                                    </div>
                                </div>
{/* If showModalNav is true, show modal (clipboard notification) */}
                                {showModalNav ? <div className='flex justify-center m-3 p-2 shadow-xl shadow-white-300 w-[80%] rounded-xl flex items-center justify-center border-2 border-white'>
                                            <FcCheckmark className='w-12 h-6'/>
                                            <p className='m-2'>Email address was copied to your clipboard</p>
                                        </div> : ""}

                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
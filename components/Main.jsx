import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFileEarmarkPerson} from 'react-icons/bs'
import {FcCheckmark} from 'react-icons/fc'
import { CopyToClipboard } from "react-copy-to-clipboard"


const Main = () => {

//States
    const [showModalMain, setShowModalMain] = useState(false)

//Function for copying to clipboard
//Set state to true when text is copied, then time out at 5 seconds
    const copiedTextModalMain = () => {
        setShowModalMain(true)
        setTimeout(() => {
             setShowModalMain(false)
        }, 6000)
    }

  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-col'>
{/* Div that holds all of content on main page */}
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Build Something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hey, I'm 
                    <span className='text-[#495f4b]'> Nikki
                    </span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Software Engineer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I'm a software engineer with a passion for building programs that improve daily life. I am enthusiastic about learning new things and am always looking for the opportunity to create something that genuinely makes an impact. 
                </p>

{/* Div that holds icons */}
                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
{/* Icons */}
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
{/* Icon LinkedIn */}
                        <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/nikki-calamia/'>
                                <a target='_blank'>
                                    <FaLinkedinIn />
                                </a>
                            </Link>
                        </div>
{/* Icon GitHub */}
                        <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://github.com/Ncalamia'>
                                <a target='_blank'>
                                    <AiOutlineGithub/>
                                </a>
                            </Link>
                        </div>
{/* Icon Email */}
                        <CopyToClipboard text='Ncalamia2468@yahoo.com'>
                            <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => copiedTextModalMain()}><HiOutlineMail />
                            </div>
                        </CopyToClipboard>
{/* Icon Resume */}
                        <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://docs.google.com/document/d/1tA8OGsFIN9cYMVe5hDVOF9zLBQN4AaWEHJ3Z82HIWWo/edit?usp=sharing'>
                                <a target='_blank'>
                                    <BsFileEarmarkPerson/>
                                </a>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
            {showModalMain ? <div className='flex flex-row py-6 shadow-xl shadow-black-300 w-[60%] h-[5%] rounded-xl flex items-center justify-center py-10 px-2 border-2 border-gray'>
                <FcCheckmark className='w-12 h-6'/>
                <p className='m-2'>Email address was copied to your clipboard</p>
            </div> : ""}
        </div>
    </div>
  )
}
export default Main
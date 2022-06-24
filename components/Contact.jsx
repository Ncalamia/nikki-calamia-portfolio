import React from 'react'
import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen mt-10'>
        <div className='max-w-[1240px] m-auto px-2 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#6c59bf]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>

{/* Container for left and right side */}
            <div className='grid lg:grid-cols-5 gap-8'>
{/* Left   */}
                <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='flex flex-col justify-evenly lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://w7.pngwing.com/pngs/174/600/png-transparent-cat-animal-lovely-cat.png" alt="Cat"/>
                        </div>
                        <div>
                            <h2 className='py-2'>Nikki Calamia</h2>
                            <p>Software Engineer</p>
                            <p>I am avaiable for freelance or full-time positions. Contact me</p>
                        </div>
                        <div>
                            <p className='text-lg'>Connect with me</p>
                            <div className='flex items-center justify-between py-4 mt-3'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <HiOutlineMail />
                                </div> 
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <BsFileEarmarkPerson />
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
{/* Right  */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' type="text"/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' type="text"/>
                            </div>
                        </div>
                        <div className='grid md:grid-col-1 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' type="text"/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' type="email"/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' type="text"/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-black-300' rows='10'></textarea>
                            </div>
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                    </form>
                </div>
            </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[purple]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
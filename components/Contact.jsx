import Link from 'next/link'
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import { AiOutlineGithub } from 'react-icons/ai'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {

//States
const [name, setName] = useState(' ')
const [phone, setPhone] = useState(' ')
const [email, setEmail] = useState(' ')
const [subject, setSubject] = useState(' ')
const [message, setMessage] = useState(' ')




//On page load
useEffect(() => { 
    setName(' ')
    setPhone(' ')
    setEmail(' ')
    setSubject(' ')
    setMessage(' ')
}, [])

  return (
    <>
    <div id='contact' className='w-screen h-20'></div>
    <div className='w-full lg:h-screen mt-10'>
        <div className='max-w-[1240px] m-auto px-2 w-full'>
            <p className='text-2xl mb-10 pt-5 tracking-widest uppercase text-[#495f4b] font-bold'>Contact</p>
{/* Div that holds contact content */}
            <div className='grid lg:grid-cols-5 gap-8'>
{/* Div (Picture, Text, Links) */}
                <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-500 rounded-xl p-4'>
                    <div className='flex flex-col justify-evenly lg:p-4 h-full'>
                        <div className='h-auto mx-auto flex justify-center mb-4 rounded-xl shadow-xl shadow-gray-500 hover:scale-105 ease-in duration-300 sm:w-[50%]'>
                            <Image className='rounded-xl' src='/../public/assets/Me-Coding-2.jpeg' width='370' height='400' alt="Nikki Calamia"/>
                        </div>
                        <div>
                            <h2 className='py-2'>Nikki Calamia</h2>
                            <p className='py-2'>Software Engineer</p>
                            <p className='py-2'>I am available for freelance or full-time positions.</p>
                        </div>
                        <div>
                            <p className='text-lg pt-4'>Connect with me</p>
                            <div className='flex items-center justify-between sm:justify-evenly py-4 mt-3'>
{/* Icon LinkedIn */}

                                <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <Link href='https://www.linkedin.com/in/nikki-calamia/'>
                                        <a target='_blank'>
                                            <FaLinkedinIn size={20}/>
                                        </a>
                                    </Link>
                                </div>
{/* Icon GitHub */} 
                                <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <Link href='https://github.com/Ncalamia'>
                                        <a target='_blank'>
                                            <AiOutlineGithub size={20}/>
                                        </a>
                                    </Link>
                                </div>
{/* Icon Resume */}                              
                                <div className='rounded-full bg-[#808a6f] shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <Link href='https://docs.google.com/document/d/1tA8OGsFIN9cYMVe5hDVOF9zLBQN4AaWEHJ3Z82HIWWo/edit?usp=sharing'>
                                        <a target='_blank'>
                                            <BsFileEarmarkPerson size={20}/>
                                        </a>
                                    </Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
{/* Div (Form)  */}   
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/616f42f7-4206-499b-8584-b7a9a51cb441'
                method='POST'>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type='text' 
                                name='name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type='text' 
                                name='phone' 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className='grid md:grid-col-1 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' 
                                type='email' 
                                name='email' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-black-400' 
                                type='text' 
                                name='subject' 
                                value={subject} 
                                onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-black-300' rows='10'
                                name='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}>  
                                </textarea>
                            </div>
                        </div>
                        <button className='bg-[#495f4b] shadow-lg shadow-gray-500 rounded-xl w-[95%] hover:bg-[#e2a185] text-white py-3 m-2'>Send Message</button>
                    </form>
                </div>
            </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#495f4b]'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[white]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
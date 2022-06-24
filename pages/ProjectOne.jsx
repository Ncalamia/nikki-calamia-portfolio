import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import HGSImg from '../public/assets/projects/HomeGoodsStore.png'
import {GrReactjs} from 'react-icons/gr'



const ProjectOne = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={HGSImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Essentials</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>About the App. About the App. About the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the AppAbout the App</p>
          <a href='https://github.com/Ncalamia/store_frontend'
            target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a href='https://homegoods-store.herokuapp.com/'
            target='_blank'>
            <button className='px-8 py-2 mt-4'>Go To Site</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <GrReactjs className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <GrReactjs className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <GrReactjs className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <GrReactjs className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <GrReactjs className='pr-1' /> Coin Gecko API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <GrReactjs className='pr-1' /> Routes
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectOne
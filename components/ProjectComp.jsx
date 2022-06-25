import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Destructuring the prop (don't have to use props. )
const ProjectComp = ({title, backgroundImg, projectPage, projectUrl, tech}) => {
  return (
// Project div
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-[#495f4b] md:h-[90%]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt={title} />
{/* Div that holds the view when hovering */}
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[80%] w-[80%]'>
            <h3 className='text-2xl text-white tracking-wider text-center pb-4 sm:pt-[10%]'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <Link href={projectPage}>
              <p className='text-center py-3 rounded-lg bg-white text-[#495f4b] font-bold text-lg cursor-pointer mt-8'>See More</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectComp
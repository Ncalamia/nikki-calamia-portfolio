import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Build Something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hey, I'm 
                    <span className='text-[#5651e5]'> Nikki
                    </span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Software Engineer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I’m a software engineer with a passion for building programs that improve daily life. I am enthusiastic about learning new things and am always looking for the opportunity to create something that genuinely makes an impact. 
                </p>
            </div>
        </div>
    </div>
  )
}
export default Main
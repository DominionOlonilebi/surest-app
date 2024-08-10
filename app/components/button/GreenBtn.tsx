import React from 'react';

interface Props {
    text: string;
}

const GreenBtn = ({text}: Props) => {
  return (
    <>
    <button className='rounded-md px-4 py-1 text-[14px] md:px-8 md:py-2 overflow-hidden group bg-[#2FB01A] relative hover:bg-gradient-to-r hover:from-[#2FB01A] hover:to-green-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#2FB01A] transition-all ease-out duration-500'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-[#2FB01A] opacity-10 rotate-12 ease'></span>
        <span className='relative'>{text} </span>
         </button>
    </>
  )
}

export default GreenBtn
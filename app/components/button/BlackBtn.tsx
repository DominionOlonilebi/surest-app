import React from 'react';

interface Props {
    text: string;
}

const BlackBtn = ({text}: Props) => {
  return (
    <>
    <button className='rounded-md px-4 py-1 text-[14px] md:px-8 md:py-2 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black hover:to-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-500'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-black opacity-10 rotate-12 ease'></span>
        <span className='relative'>{text} </span>
         </button>
    </>
  )
}

export default BlackBtn
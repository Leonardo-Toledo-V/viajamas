import React from 'react';
import Text from './Text';
import Image from 'next/image';

export default function Main() {

  return (
    <div className="w-screen h-screen bg-[url('/background-desktop.webp')] bg-cover">
      <div className='flex justify-center items-center pt-56'>
          <div>
            <Image 
            src='/logo.png'
            width={300}
            height={100}
            className='mr-32'
            />
          </div>
          <Text/>
      </div>
    </div>
  )
}

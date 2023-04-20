import React from 'react'

export default function Icons() {
    return (
    <div className='max-w-[200px] mt-4 w-28 sm:w-32 md:w-36 xl:w-40'>
        <div className='flex items-center justify-center space-x-2 w-full'>
        <div>
            <a href="">
                <img src="./instagram.png" alt="" className='hover:scale-110 duration-300' />
            </a>
        </div>
        <div>
            <a href="">
                <img src="./tiktok.png" alt="" className='hover:scale-110 duration-300' />
            </a>
        </div>
        <div>
            <a href="">
                <img src="./whatsapp.png" alt="" className='hover:scale-110 duration-300'/>
            </a>
        </div>
        </div>
       
    </div>
)}

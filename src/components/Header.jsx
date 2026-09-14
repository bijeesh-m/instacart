import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div >
            <header className=' flex px-4 md:px-10 py-2.5  md:py-3.5 items-center justify-between '>
                <div className=' flex gap-2'>
                    <Image src="/menu.svg" width={25} height={50} alt='menu-bar' />
                    <Image className=' hidden md:block' src="/logo.svg" width={150} height={50} alt='menu-bar' />
                    <Image className=' md:hidden' src="/mobile-logo.svg" width={30} height={50} alt='menu-bar' />
                </div>
                <div className='w-[50%] hidden md:flex items-center relative'>
                    <input className=' w-full shadow-inner  rounded-full border placeholder:font-semibold placeholder:text-[16px] placeholder:text-gray-700 border-[#C7C8CD] py-4 px-10 outline-none' placeholder='Search products and stores' type="text" name="" id="" />
                    <Image className='absolute left-3 ' src='/search.svg' width={25} height={25} alt='search-icon' />
                </div>
                <div className=' font-semibold flex gap-3'>
                    <button className=' border border-[#C7C8CD] px-5 md:px-14 py-2 rounded-full '>
                        Login
                    </button>
                    <button className=' text-white bg-[#108910] border border-[#C7C8CD] px-5 md:px-14 py-2 rounded-full '>
                        Register
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header
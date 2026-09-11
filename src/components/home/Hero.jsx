import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className=' h-56 flex  gap-10 bg-[#003D29] items-center'>
            <div className=' max-w-2xl  flex flex-col gap-2 px-20 text-center'>
                <h1 className=' text-white font-bold text-3xl'>Order groceries for delivery <br /> or pickup today</h1>
                <button className=' text-white bg-[#108910]  text-lg font-bold  px-14 py-3 rounded-full '>
                    Sign up to get $0 delivery fee*
                </button>
                <p className=' text-sm text-white'>*Service and other fees apply. 3 orders in 14 days. Excludes <br /> restaurants.</p>
            </div>
            <div>
                <Image src="/heroImage.png" width={630} height={300} alt='hero-image' />
            </div>
        </div>
    )
}

export default Hero
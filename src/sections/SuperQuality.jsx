import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { shoe8 } from '../../public/assets/images'

const SuperQuality = () => {
    return (
        <section id='about-us' className='max-container w-full flex max-lg:flex-col items-center justify-between '>
            <div className='flex  flex-1 flex-col'>
                <h1 className='text-4xl capitalize font-palanquin font-bold lg:max-w-lg'>We Provide You
                    <span className='text-coral-red'> Super Quality</span> Shoes
                </h1>
                <p className='info-text mt-4 lg:max-w-lg'>  Ensuring premium comfort and style, our meticulously crafted footwear
                    is designed to elevate your experience, providing you with unmatched
                    quality, innovation, and a touch of elegance.</p>
                <p className='info-text lg:max-w-lg mt-6'>Our dedication to detail and excellence ensures your satisfaction</p>
                <div className='mt-11'>
                    <Button label="View details" />
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <Image src={shoe8}
                    alt='product detail'
                    width={570}
                    height={522}
                    className='object-contain' />
            </div>

        </section>
    )
}

export default SuperQuality
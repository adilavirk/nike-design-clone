import Image from 'next/image'
import React from 'react'

const Button = ({ label, iconURL, borderColor, backgroundColor, textColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : " bg-coral-red rounded-full text-white border border-coral-red "} rounded-full ${fullWidth && 'w-full'}`}
        >
            {label}
            {iconURL && (
                <Image src={iconURL} alt='arrow right icon' className='ml-2 rounded-full' width={20} height={20} />
            )}
        </button>
    )
}

export default Button

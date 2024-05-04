import { StaticImageData } from 'next/image';
import React from 'react'

function BackgroundImage({ children, className }: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <div className={`${className}`}>
            {/* <div className='next-video-bg-text'> */}
                {children}
            {/* </div> */}
        </div>
    )
}

export default BackgroundImage
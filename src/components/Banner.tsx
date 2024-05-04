import React from 'react'

import BackgroundImage from './BackgroundImage'


function Banner() {

    return (
        <BackgroundImage className='flex flex-col z-[-1] h-fit mainBannerImg'>
            <div className='w-full lg:h-[970px] h-[500px] bg-gradient-to-t from-black via-[#3d8bff73] to-[#ab23ff31] flex items-end' >

                <div className='container w-[100%] mx-auto px-4'>
                    <h1 className='xl:text-[68px] lg:text-[42px] sm:text-[30px] text-[24px]   text-white font-MonumentExtended uppercase leading-[1.1]'>The world's first platform for Tokenizing AI blockchain projects</h1>
                    <div className='bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] py-[1px] max-w-max mt-10 mb-10'>
                        <div className='bg-black'>

                            <p className='grad-text lg:text-[22px] text-[18px] bg-black'>Hold the Creon Pass NFT and earn passive income from AI Tools</p>

                        </div>
                    </div>
                </div>
            </div>
        </BackgroundImage>
    )
}

export default Banner
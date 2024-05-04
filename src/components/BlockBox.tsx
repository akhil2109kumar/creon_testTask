import React from 'react'
import AppImage from './AppImage'
import { blog1 } from '@/assets'

function BlockBox() {
    return (
        <div className='bg-[#13171D] rounded-[6px] relative'>
            <span className='absolute right-[30px] top-[-15px] bg-white text-black uppercase rounded-xl px-2 font-bold '>comming soon</span>
            <div className='p-[30px]'>
                <h5 className='lg:text-[38px] text-[24px] text-white font-MonumentExtended font-bold'>TOKEN</h5>
                <p className='lg:text-[22px] text-[18px] grad-text font-bold'>Empowering NFT Holders and Shaping AI Development</p>
            </div>
            <AppImage src={blog1} alt='img' className='w-full' />
            <p className='text-lg text-white p-[30px]'>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
        </div>
    )
}

export default BlockBox
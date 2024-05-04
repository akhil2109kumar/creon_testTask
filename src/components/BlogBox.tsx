import React from 'react'
import AppImage from './AppImage'
import { blog1 } from '@/assets'

function BlogBox() {
    return (
        <div className='flex bg-[rgba(19,23,29,60%)] rounded-[6px] items-center lg:flex-row flex-col-reverse'>
            <div className='xl:p-[40px] lg:p-[30px] p-[15px]'>
            <h5 className='xl:text-[38px] text-[24px] text-white font-MonumentExtended'>AI Prospects, Market Size, and Development Pace</h5>
            <p className='text-lg text-white'>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
            </div>
            <AppImage src={blog1} alt='img' className='lg:min-w-[40%]  w-full' />
        </div>
    )
}

export default BlogBox
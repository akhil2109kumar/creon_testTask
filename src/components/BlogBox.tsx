import React from 'react'
import AppImage from './AppImage'
import { blog1 } from '@/assets'

function BlogBox() {
    return (
        <div className='flex '>
            <div>
            <h5>AI Prospects, Market Size, and Development Pace</h5>
            <p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
            </div>
            <AppImage src={blog1} alt='img' />
        </div>
    )
}

export default BlogBox
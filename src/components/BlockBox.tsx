import React from 'react'
import AppImage from './AppImage'
import { blog1 } from '@/assets'

function BlockBox() {
    return (
        <div>
            <span>comming soon</span>
            <h5>TOKEN</h5>
            <p>Empowering NFT Holders and Shaping AI Development</p>
            <AppImage src={blog1} alt='img' />
            <p>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
        </div>
    )
}

export default BlockBox
import { discord, niftablesLogo, telegram, twitter } from '@/assets'
import React from 'react'
import AppImage from './AppImage'
import AppMedia from './AppMedia'

function Footer() {
  return (
    <div className='flex justify-between items-center'>
      <div className='max-w-[1472px] w-[100%] mx-auto px-4 flex justify-between items-center'>
        <div className='flex items-center space-x-10'>
          <span>© Creon 2023. All rights reserved.</span>
          <AppMedia />
        </div>
        <div className='flex items-center'>
          <span className='mr-[5px]'>
            Powered by
          </span>
          <AppImage src={niftablesLogo} alt={'logo'} width={101} />
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import AppImage from './AppImage'
import { discord, telegram, twitter } from '@/assets'
function AppMedia() {
    return (
        <ul className="flex items-center gap-[10px] !ml-0">
            <li className='w-[34px] h-[34px] border-2 border-solid rounded-[50%] flex justify-center items-center'>
                <AppImage src={telegram} alt={'logo'} width={101} />
            </li>
            <li className='w-[34px] h-[34px] border-2 border-solid rounded-[50%] flex justify-center items-center'>
                <AppImage src={discord} alt={'logo'} width={101} />
            </li>
            <li className='w-[34px] h-[34px] border-2 border-solid rounded-[50%] flex justify-center items-center'>
                <AppImage src={twitter} alt={'logo'} width={101} />
            </li>
        </ul>
    )
}

export default AppMedia
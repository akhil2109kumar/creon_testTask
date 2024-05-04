"use client"
import { useState } from 'react';
import { barImg, logo } from '@/assets';
import AppLink from './AppLink';
import AppImage from './AppImage';
function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex justify-between lg:items-center items-start pt-[30px] px-[50px] fixed top-0 w-full z-50">
            <AppImage src={logo} alt={'logo'} width={140} styles={{ flex: 1 }} />
            <button className='rounded-md mr-3 text-lg w-8 p-0 h-8 lg:hidden block' onClick={()=>setToggle(true)}>
                <AppImage src={barImg} alt='bar' className='invert-[1]' />
            </button>
            <div className={`flex lg:items-center items-start lg:flex-row flex-col-reverse lg:gap-0 gap-5 lg:relative absolute top-0 lg:pt-0 pt-5 right-0 justify-end lg:bg-transparent flex-nowrap bg-black lg:h-auto h-[100vh] ${toggle ? 'block' : 'lg:flex hidden'}`}>
                <AppLink href={'/'} active><span>Creon Pass</span></AppLink>
                <AppLink href={'/'}><span>Token</span></AppLink>
                <AppLink href={'/'}><span>AI Revenue</span></AppLink>
                <AppLink href={'/'}><span>AI Launchpad</span></AppLink>
                <div className='flex gap-10'>
                    <button className="w-[132px] h-[44px] border-2 border-solid border-white rounded-[6px] ml-10 text-lg text-bold">Connect</button>
                    <button className='px-5 rounded-md mr-3 text-lg bg-blue-600 lg:hidden block' onClick={()=>setToggle(false)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Header
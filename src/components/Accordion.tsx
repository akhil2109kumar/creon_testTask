"use client"
import React, { useMemo, useState } from 'react'
import AppImage from './AppImage';
import { StaticImageData } from 'next/image';

interface AppAccordion{
    icon: StaticImageData | string;
    title: string;
    content?: string;
}
function Accordion({ icon, title, content }:AppAccordion) {
    const [open, setOpen] = useState(false);
    const style = useMemo(() => {
        if (open) {
            return "border-t-2 border-l-2 rotate-45"
        } else {
            return "border-b-2 border-r-2 rotate-45"
        }
    }, [open])
    return (
        <div className={`flex justify-between py-[30px] ${open ? 'items-start' : 'items-center'} border-b border-[#13171D]`}>
           <div className={`hexagonouter ${open ? 'open' : 'close'}`}>
                <AppImage src={icon} alt='icon'/>
            </div>
            <div className='w-[100%] pl-[30px]'>
                <div className='flex justify-between items-center font-bold text-[22px] text-white' onClick={() => setOpen((prev) => !prev)}>{title} <span className={`flex w-[6px] h-[6px] ${style}`}></span></div>
                {open && <div className='mt-[30px] text-lg text-white'>{content ?? "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."}</div>}
            </div>
        </div>
    )
}

export default Accordion
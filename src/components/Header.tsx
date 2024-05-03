import { logo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import AppLink from './AppLink';
import AppImage from './AppImage';
function Header() {
    return (
        <div className="flex justify-between items-center pt-[30px] px-[50px]">
            <AppImage src={logo} alt={'logo'} width={140} styles={{ flex: 1 }} />
            <div className="flex items-center space-x-4">
                <AppLink href={'/'} active><span>Creon Pass</span></AppLink>
                <AppLink href={'/'}><span>Token</span></AppLink>
                <AppLink href={'/'}><span>AI Revenue</span></AppLink>
                <AppLink href={'/'}><span>AI Launchpad</span></AppLink>
                <button className="w-[132px] h-[44px] border-2 border-solid border-white rounded-[6px]">Connect</button>
            </div>
        </div>
    )
}

export default Header
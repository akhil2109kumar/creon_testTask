import Link from 'next/link';

interface Link {
  children: JSX.Element;
  href: string;
  active?: boolean;
}
function AppLink({ children, href,active }: Link) {
  return (
    <Link href={href} className='text-lg text-white font-bold xl:mx-5 mx-3' >
      {children}
      {!active &&<sup className='text-[10px] uppercase text-purple-400 py-[2px] px-[4px] rounded-lg ml-2 bg-black'>SOON</sup>}
    </Link>
  )
}

export default AppLink
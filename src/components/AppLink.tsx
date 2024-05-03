import Link from 'next/link';

interface Link {
  children: JSX.Element;
  href: string;
  active?: boolean;
}
function AppLink({ children, href,active }: Link) {
  return (
    <Link href={href} >
      {children}
      {!active &&<sup>SOON</sup>}
    </Link>
  )
}

export default AppLink
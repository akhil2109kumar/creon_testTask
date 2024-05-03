import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface Image {
    src: StaticImageData | string;
    alt: string;
    styles?: React.CSSProperties;
    width?: number;
    className?: string;
}
function AppImage({ src, alt, styles, width, className }: Image) {
    return (
        <Image src={src} alt={alt} style={{ ...styles, maxWidth: width }} className={className} />
    )
}

export default AppImage
import React from 'react'

interface HeaderProps {
    text?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
}
const Header: React.FC<HeaderProps> = ({ text, color, fontSize, fontWeight, lineHeight }) => {
    return (
        <span className={`font-space text-[${color}] font-${fontWeight} leading-[${lineHeight}]`} style={{fontSize, color}}>{text}</span>
    )
}

export default Header
import React from 'react'

interface ButtonProps {
    title?: string;
    txtColor?: string;
    bg?: string;
    Icon?: any
    handleOnClick?: ()=> void;
}
export const Button: React.FC<ButtonProps> = ({ title, txtColor, bg,Icon, handleOnClick }) => {
    return (
        <div
            className={`w-full h-auto py-2 px-5 rounded-[20px] font-space font-medium leading-[24px] flex flex-row gap-2 items-center cursor-pointer text-[20px]`}
            style={{color: txtColor, background: bg}}
            onClick={handleOnClick}
        >
            {Icon && <Icon/> }
            {title}
        </div>
    )
}

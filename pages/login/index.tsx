import Header from '@/components/Text/Header'
import { Button } from '@/components/button/Button'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import bg1 from '/public/images/background/bg1.jpg'

const index = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg1.src})`, backgroundRepeat: 'inherit', backgroundSize: '100% auto' }}>
      <div className="bg-white p-6 flex flex-col gap-4 rounded-lg shadow-2xl">
        <div className="w-full text-center mb-4">
          <Header text="Login" color="#000" fontSize="32px" lineHeight="24px" fontWeight="bold" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Button title="Continue With Google" txtColor="#FFF" bg="#EF4444" Icon={GoogleIcon}/>
          <Button title="Continue With Github" txtColor="#FFF" bg="#000" Icon={GitHubIcon} />
          <Button title="Continue With Phone" txtColor="#FFF" bg="#0a6cc8" Icon={PhoneIcon} />
        </div>
        <hr className="h-[2px] bg-[#777676b8]" />
        <Button title="Continue With Email" txtColor="#FFF" bg="#8b8b8b" Icon={GoogleIcon} />
      </div>
    </div>
  )
}

export default index
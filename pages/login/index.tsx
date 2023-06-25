/* eslint-disable react-hooks/rules-of-hooks */
import Header from '@/components/Text/Header'
import { Button } from '@/components/button/Button'
import React, { useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import bg1 from '/public/images/background/bg1.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGithub, signInWithGoogle } from '@/firebase';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLoggedUserData } from '@/redux/slice/userSlice';

const index = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!user){
      router.push('/login')
    }else{
      dispatch(setLoggedUserData(user));
      router.push('/')
    }
  },[router, user])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg1.src})`, backgroundRepeat: 'inherit', backgroundSize: '100% auto' }}>
      <div className="bg-white p-6 flex flex-col gap-4 rounded-lg shadow-2xl">
        <div className="w-full text-center mb-4">
          <Header text="Login" color="#000" fontSize="32px" lineHeight="24px" fontWeight="bold" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Button title="Continue With Google" txtColor="#FFF" bg="#EF4444" Icon={GoogleIcon} handleOnClick={signInWithGoogle}/>
          <Button title="Continue With Github" txtColor="#FFF" bg="#000" Icon={GitHubIcon} handleOnClick={signInWithGithub} />
          <Button title="Continue With Phone" txtColor="#FFF" bg="#0a6cc8" Icon={PhoneIcon} />
        </div>
        <hr className="h-[2px] bg-[#777676b8]" />
        <Button title="Continue With Email" txtColor="#FFF" bg="#8b8b8b" Icon={GoogleIcon} />
      </div>
    </div>
  )
}

export default index
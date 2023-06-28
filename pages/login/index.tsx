/* eslint-disable react-hooks/rules-of-hooks */
import Header from '@/components/Text/Header'
import { Button } from '@/components/button/Button'
import React, { useEffect, useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import bg1 from '/public/images/background/bg1.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendOTP, signInWithGithub, signInWithGoogle } from '@/firebase';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLoggedUserData } from '@/redux/slice/userSlice';
import OtpInput from 'react-otp-input'
import { CgSpinner } from 'react-icons/cg'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const otpContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px'
}

const otpInput = {
  display: 'flex',
  padding: '5px 0',
  marginRight: '0px',
  border: '1px solid black',
  width: '2rem',
  borderRadius: '5px'
}

const ContinueWithPhone = () => {
  const [otpValue, setOTpvalue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otpVerify, setOtpVerify] = useState<boolean>(false);
  const [confirmationResponse, setConfirmationResponse] = useState<any>(null)

  // OTP Sending
  const handleOTPSend = async () => {
    setLoading(true)
    try {
      await sendOTP(phoneNumber).then((response) => {
        setConfirmationResponse(response)
        setOtpVerify(true)
      })
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  // Verifying the OTP
  const verifyOTP = async () => {
    setLoading(true)
    try {
      const verify = await confirmationResponse.confirm(otpValue);
      if (!verify) alert("OTP is Wrong")
    } catch (error) {
      setOTpvalue('')
      alert(error)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='w-full h-full text-center flex flex-col gap-2'>
        {!otpVerify &&
          <>
            <label htmlFor="" className='font-space text-2xl font-medium'>Enter Your Mobile No.</label>
            <PhoneInput country={'in'} value={phoneNumber} onChange={setPhoneNumber} />
            <button className='bg-[#7A8793] px-3 py-2 font-space text-white rounded-lg flex flex-row gap-2 justify-center items-center w-full' onClick={handleOTPSend}>
              {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
              Send Code Via SMS
            </button>
            <div id='recaptcha'></div>
          </>}
        {otpVerify &&
          <>
            <label htmlFor="" className='font-space text-2xl font-medium'>Enter Your OTP</label>
            <OtpInput
              containerStyle={otpContainer}
              inputStyle={otpInput}
              value={otpValue}
              onChange={setOTpvalue}
              numInputs={6}
              // renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />} />
            <button className='bg-[#7A8793] px-3 py-2 font-space text-white rounded-lg flex flex-row gap-2 justify-center items-center w-full' onClick={verifyOTP}>
              {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
              Verify</button>
          </>
        }
      </div>
    </>
  )
}

const index = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const [mobileSignIn, setMobileSignIn] = useState<Boolean>(false)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    } else {
      dispatch(setLoggedUserData(user));
      router.push('/')
    }
  }, [router, user])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg1.src})`, backgroundRepeat: 'inherit', backgroundSize: '100% auto' }}>
      <div className="bg-white p-6 flex flex-col gap-4 rounded-lg shadow-2xl min-w-[285px]">
        <div className="w-full text-center mb-4">
          <Header text="Login" color="#000" fontSize="32px" lineHeight="24px" fontWeight="bold" />
        </div>
        {!mobileSignIn ?
          <>
            <div className="flex flex-col w-full gap-3">
              <Button title="Continue With Google" txtColor="#FFF" bg="#EF4444" Icon={GoogleIcon} handleOnClick={signInWithGoogle} />
              <Button title="Continue With Github" txtColor="#FFF" bg="#000" Icon={GitHubIcon} handleOnClick={signInWithGithub} />
              <Button title="Continue With Phone" txtColor="#FFF" bg="#0a6cc8" Icon={PhoneIcon} handleOnClick={() => setMobileSignIn(true)} />
            </div>
          </>
          : <ContinueWithPhone />}
      </div>
    </div>
  )
}

export default index
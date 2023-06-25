import Header from '@/components/Text/Header'
import { logout } from '@/firebase'
import { loggedUserData } from '@/redux/slice/userSlice';
import { useSelector } from 'react-redux';

export default function Home() {
  const userDetails = useSelector(loggedUserData);
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-center items-center'>
        <Header text='Welcome' color='#000' fontSize='68px' lineHeight='20px' fontWeight='bold'/>
        <Header text={userDetails?.displayName} color='#000' fontSize='20px' lineHeight='20px' fontWeight='bold'/>
        <button 
        className='px-4 py-2 bg-[#ff1a1aca] hover:bg-[#c73232ca] font-space font-bold text-[25px] mt-5 rounded-lg hover:text-white transition-all'
        onClick={logout}>Log Out</button>
    </div>
  )
}

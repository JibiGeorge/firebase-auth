import Header from '@/components/Text/Header'

export default function Home() {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-center items-center'>
        <Header text='Welcome' color='#000' fontSize='68px' lineHeight='20px' fontWeight='bold'/>
        <Header text='Jibi George' color='#000' fontSize='20px' lineHeight='20px' fontWeight='bold'/>
        <button className='px-4 py-2 bg-[#ff1a1aca] hover:bg-[#c73232ca] font-space font-bold text-[25px] mt-5 rounded-lg hover:text-white transition-all'>Log Out</button>
    </div>
  )
}

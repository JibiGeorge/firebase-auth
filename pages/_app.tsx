import { auth } from '@/firebase';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import CircularProgress from '@mui/material/CircularProgress';

export default function App({ Component, pageProps }: AppProps) {

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [router, user]);

  return (
    <>
    {loading ? 
    <CircularProgress/>
      : <Component {...pageProps} />}
    </>
  )
}

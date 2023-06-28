import { auth } from '@/firebase';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import CircularProgress from '@mui/material/CircularProgress';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

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
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <CircularProgress />
        </div>
        : <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>}
    </>
  )
}

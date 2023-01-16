import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Router from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {

    if (user) {
      Router.push('/');
    } else {
      Router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />
}

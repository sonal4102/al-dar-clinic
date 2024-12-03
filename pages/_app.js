import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { usePathname } from 'next/navigation'

import store from '../redux/store'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'
import '@/styles/fonts.css'

export default function App({ Component, pageProps }) {
  const path = usePathname()

  return (
    <Provider store={store}>
      <div className='min-h-screen overflow-x-hidden flex flex-col'>
        <Navbar />
        <Component {...pageProps} />
        {path?.split('/')[1] !== 'auth' && <Footer />}
      </div>
      <Toaster />
    </Provider>
  )
}

import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import store from '../redux/store'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom-carousel.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Toaster />
    </Provider>
  )
}

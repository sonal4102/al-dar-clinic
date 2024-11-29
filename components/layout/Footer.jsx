import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaFacebook,
  FaPhoneVolume,
  FaRegCopyright,
  FaRegEnvelope,
  FaXTwitter,
} from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import Button from '../Button'

const contacts = [
  {
    branch: 'Dubai',
    phone: '00971567761277',
    email: 'info@emiratesrehabilitation.ae',
  },
  {
    branch: 'Oman',
    phone: '00968 9548 4273',
    email: 'info@emiratesrehabilitation.ae',
  },
  {
    branch: 'Iraq',
    phone: '00964 7757766919',
    email: 'info@emiratesrehabilitation.ae',
  },
]

const links = [
  { name: 'Home Page', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
]

const Footer = () => {
  const path = usePathname()

  return (
    <footer className='bg-gradient-to-bl from-[#33C7DA] from-[8.91%] to-[#2F8893] to-[96.36%] mt-16 text-white'>
      <div className='bg-primary w-full flex flex-row py-12 md:py-3 justify-center gap-14 md:gap-24 text-2xl'>
        <Link href='https://facebook.com/'>
          <FaFacebook />
        </Link>
        <Link href='https://facebook.com/'>
          <AiFillInstagram />
        </Link>
        <Link href='https://facebook.com/'>
          <FaXTwitter />
        </Link>
      </div>
      <div className='pt-28 max-w-7xl mx-auto px-7 md:px-12'>
        <div className='flex flex-col md:flex-row gap-16'>
          {contacts.map((cntc, ind) => (
            <div className='flex-1' key={ind}>
              <h5 className='text-lg font-bold leading-7 mb-1'>
                {cntc.branch}
              </h5>
              <div className='h-[1px] bg-white w-full'></div>
              <p className='mt-4 text-sm'>
                <FaPhoneVolume className='mr-2 text-base inline' />
                {cntc.phone}
              </p>
              <p className='mt-4 text-sm mb-14  md:mb-28'>
                <FaRegEnvelope className='mr-2 text-base inline' />
                {cntc.email}
              </p>
            </div>
          ))}
        </div>
        <div className='flex flex-col mt-28 md:mt-0 md:flex-row gap-10 items-center justify-center'>
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`text-sm ${path === link.href && 'text-[#71E5FF]'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href='/book'>
            <Button variant='outline'>Book Now</Button>
          </Link>
        </div>
        <p className='py-10'>
          <FaRegCopyright className='inline' />
          <span className='ml-2 text-sm align-middle'>
            2024 Al-Dar Rehabilitation Center.
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer

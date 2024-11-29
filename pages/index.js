import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Carousel from '@/components/carousels/HeroCarousel'
import ServicesCarousel from '@/components/carousels/ServicesCarousel'
import ADR from '@/public/images/ADR.webp'
import Vision from '@/public/images/our-vision.webp'
import Mission from '@/public/images/our-mission.webp'
import Training from '@/public/images/training.webp'
import Mohammed from '@/public/images/dr-mohamad.webp'
import Alex from '@/public/images/dr-alex.webp'
import Nauf from '@/public/images/dr-nauf.webp'
import Abdul from '@/public/images/dr-abdul.webp'
import Othman from '@/public/images/dr-othman.webp'
import Connector from '@/public/icons/connector.svg'
import Button from '@/components/Button'
import GalleryCarousel from '@/components/carousels/GalleryCarousel'
import { useState } from 'react'

const TeamCard = ({ item }) => {
  return (
    <div className='w-80 h-96 max-w-[calc(100vw-54px)] lg:h-[450px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] rounded-2xl'>
      <Image
        src={item.img}
        alt={item.name}
        className='shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] rounded-2xl h-64 lg:h-[320px]'
      />
      <h4 className='font-medium text-2xl text-[#151515] text-center mt-5 mb-4'>
        {item.name}
      </h4>
      <p className='text-center opacity-70 font-medium'>{item.desc}</p>
    </div>
  )
}

const variants = {
  open: {
    height: 'auto',
    transition: { stiffness: 20 },
  },
  closed: {
    height: 100,
    transition: { stiffness: 20 },
  },
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const tags = {
    en: ['Counseling', 'Spine', 'Geriatric', 'Pain', 'Neutro', 'Physio'],
    ar: [
      'الاستشارات الطبية',
      'العمود الفقري',
      'كبار السن',
      'الجهاز العصبي',
      'العلاج الطبيعي',
    ],
  }
  const team = [
    {
      name: 'Dr. Mohammed',
      desc: 'Founder and CEO of Al - Dar',
      img: Mohammed,
    },
    { name: 'Dr. Alex Elizabeth', desc: 'Al - Dar', img: Alex },
    { name: 'Dr. Nauf AlBendar', desc: 'Al - Dar', img: Nauf },
    { name: 'Dr. Abdul', desc: 'Al - Dar', img: Abdul },
    { name: 'Dr. Othman', desc: 'Al - Dar', img: Othman },
  ]

  return (
    <main className='w-full bg-gradient-to-b from-[#f9f9f9] from-0% to-white to-20%'>
      <div className='w-full max-w-7xl px-0 md:px-12 mx-auto'>
        <Carousel />
        <div className='mt-24 flex flex-col md:flex-row items-stretch gap-12 md:gap-5'>
          <div className='hidden md:flex gap-4 flex-wrap items-center'>
            {tags.ar.map((tag, ind) => (
              <span
                key={ind}
                className={`py-[6px] px-7 text-white rounded-full ${
                  ind % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='w-full md:w-[1px] h-[1px] md:h-auto bg-primary hidden md:block'></div>
          <div className='flex items-center justify-center px-7 md:px-0'>
            <Image src={ADR} alt='ADR' loading='lazy' width={336} />
          </div>
          <div className='w-full md:w-[1px] h-[1px] md:h-auto bg-primary'></div>
          <div className='flex gap-3 md:gap-4 flex-wrap items-center mx-7 md:mx-0'>
            {tags.en.map((tag, ind) => (
              <span
                key={ind}
                className={`py-[6px] text-xs md:text-base px-4 md:px-7 text-white rounded-full ${
                  ind % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='w-full md:w-[1px] h-[1px] md:h-auto bg-primary block md:hidden'></div>
          <div className='flex md:hidden gap-3 flex-wrap items-center  mx-7'>
            {tags.ar.map((tag, ind) => (
              <span
                key={ind}
                className={`py-[6px] px-4 text-xs text-white rounded-full ${
                  ind % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-28 px-7 md:px-0'>
          <h2 className='text-3xl font-medium mb-10 md:hidden'>AL-DAR</h2>
          <div className='flex flex-col-reverse md:flex-row md:items-stretch lg:items-center gap-6 md:gap-0'>
            <div className='inline-block w-full md:w-[45%] md:pr-20'>
              <h3 className='font-medium text-3xl'>Our Vision</h3>
              <div className='h-[1px] w-full bg-primary my-4'></div>
              <p className='text-lg'>
                <b>Al Dar&apos;s</b> vision is to become a local and
                international leader in the healthcare sector, setting the
                highest standards for excellence in rehabilitation services,
                Medical Services, and Home care.
              </p>
            </div>
            <div className='w-full md:w-[55%] aspect-[1.1/1] md:aspect-video relative'>
              <Image
                src={Vision}
                alt='Our Vision'
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-2xl shadow-[0_5px_20px_0_rgba(0,0,0,0.12)] z-[1]'
                loading='lazy'
              />
            </div>
          </div>
          <Image
            src={Connector}
            alt='Connector'
            className='mx-[50%] -mt-[5px] z-0 relative hidden md:block'
            loading='lazy'
          />
          <div className='flex flex-col md:flex-row items-stretch lg:items-center mt-20 md:-mt-[5px] gap-6 md:gap-0'>
            <div className='w-full md:w-[55%] aspect-[1.1/1] md:aspect-video relative'>
              <Image
                src={Mission}
                alt='Our Mission'
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-2xl shadow-[0_5px_20px_0_rgba(0,0,0,0.12)] z-[1]'
                loading='lazy'
              />
            </div>
            <div className='inline-block w-full md:w-[45%] md:pl-20'>
              <h3 className='font-medium text-3xl'>Our Mission</h3>
              <div className='h-[1px] w-full bg-primary my-4'></div>
              <p className='text-lg'>
                <b>Al Dar&apos;s</b> mission To provide exceptional healthcare
                services, focusing on rehabilitation, to individuals of all
                ages. We are committed to delivering personalized and effective
                care that promotes overall well-being
              </p>
            </div>
          </div>
        </div>
        <div className='mt-28'>
          <div className='flex flex-col-reverse md:flex-row items-center gap-12'>
            <h2 className='font-medium text-4xl md:text-5xl'>OUR SERVICES</h2>
            <div className='bg-primary h-[1px] w-full md:flex-1'></div>
          </div>
          <ServicesCarousel />
          <Link href='#' className='mx-auto block w-fit mb-10 md:mb-24'>
            <Button size='lg'>Show More</Button>
          </Link>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-9 mx-7 md:mx-0 md:gap-24 items-center mb-16 md:mb-40'>
          <div>
            <h3 className='font-medium md:text-[26px] uppercase'>
              Continuous Medical Education and Training
            </h3>
            <div className='bg-primary h-[1px] w-full my-4 md:my-6'></div>
            <p className='text-lg opacity-90 indent-8'>
              At <b>Al-Dar</b>, we are committed to fostering a culture of
              continuous learning and professional growth among our staff.
              Through regular and ongoing education sessions, workshops, and
              training programs, we empower our team members to stay up-to-date
              with the latest advancements in healthcare.
              <br className='md:hidden' />
              <br className='md:hidden' />
              <span className='block indent-8 md:inline'>
                {' '}
                By investing in their development, we ensure that our staff are
                equipped with the knowledge and skills necessary to deliver
                exceptional medical services and provide the highest standard of
                care to our valued patients.
              </span>
            </p>
          </div>
          <Image
            src={Training}
            alt='Continuous Medical Education and Training'
            width={426}
            height={326}
            className='rounded-2xl shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]'
          />
        </div>
        <div className='bg-primary h-[1px] w-full md:hidden mb-8'></div>
        <div className=''>
          <div className='flex flex-row items-center gap-16 mb-16 md:mb-24'>
            <h3 className='text-3xl md:text-5xl font-medium tracking-wide'>
              MEET OUR TEAM
            </h3>
            <div className='bg-primary hidden md:block h-[1px] flex-1'></div>
          </div>
          <div className='flex flex-col items-center md:flex-row gap-20 md:gap-32 justify-center'>
            {team.slice(0, 2).map((item, ind) => (
              <TeamCard key={ind} item={item} />
            ))}
          </div>
          <motion.div
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            className='flex flex-col md:!h-auto md:flex-row gap-20 md:gap-12 lg:gap-20 justify-between mt-10 py-10 md:mt-32 items-center overflow-hidden px-7 md:px-0'
          >
            {team.slice(2).map((item, ind) => (
              <TeamCard key={ind} item={item} />
            ))}
          </motion.div>
          <div className='flex justify-center mt-7'>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              size='lg'
              className='md:hidden'
            >
              Show {isOpen ? 'Less' : 'More'}
            </Button>
          </div>
        </div>
        <div className='w-full mt-16 md:mt-56'>
          <div className='flex flex-col-reverse md:flex-row md:items-center gap-16 mb-24'>
            <h3 className='text-3xl md:text-5xl font-medium tracking-wide px-7'>
              GALLERY
            </h3>
            <div className='bg-primary !h-[1px] md:flex-1 w-full'></div>
          </div>
          <GalleryCarousel />
        </div>
      </div>
    </main>
  )
}

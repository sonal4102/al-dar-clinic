import Image from 'next/image'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FaCircleXmark, FaExclamation } from 'react-icons/fa6'

import Header from '@/components/layout/Header'
import Animated from '@/components/Animated'
import dumbbell from '@/public/images/products/dumbbell.webp'
import { StatusBar } from '../orders'
import Button from '@/components/Button'
import Link from 'next/link'

const cartItems = [
  {
    id: 1,
    name: 'Dumbbell 6Kgs',
    img: dumbbell,
    price: 100,
    category: 'PHYSIOTHERAPY TOOLS',
    quantity: 1,
  },
]

const OrderDetails = () => {
  const handleCancel = () => {
    toast.custom(
      (t) => (
        <motion.div
          initial={{ zIndex: -20, opacity: 0 }}
          animate={
            t.visible
              ? { zIndex: 100, opacity: 1 }
              : { zIndex: -20, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className='absolute -top-4 -left-4 w-screen !h-screen bg-black/60 flex items-center justify-center p-5'
        >
          <motion.div
            initial={{ y: 15 }}
            animate={t.visible ? { y: 0 } : { y: 15 }}
            className='w-fit xl:w-full max-w-5xl mx-auto bg-white rounded-2xl p-3 pb-12 md:p-8 md:pb-20'
          >
            <Button
              size='icon'
              variant='ghost'
              onClick={() => toast.dismiss(t.id)}
              className='ml-auto'
            >
              <FaCircleXmark className='text-primary text-2xl md:text-4xl mx-auto' />
            </Button>
            <div className='border-8 border-yellow-500 rounded-full w-fit mx-auto'>
              <FaExclamation className='text-yellow-500 text-[100px] md:text-[136px] lg:text-[180px] xl:text-[218px]' />
            </div>
            <p className='text-xl font-medium md:text-2xl xl:text-4xl text-center mt-12 md:mt-18 tracking-wide'>
              Are you sure?
            </p>
            <p className='text-center my-4 lg:my-8'>
              You want to cancel your order?
            </p>
            <div className='flex flex-row items-center justify-center gap-4 md:hidden'>
              <Button size='sm'>Yes, Cancel it!</Button>
              <Button
                size='sm'
                variant='secondary'
                onClick={() => toast.dismiss(t.id)}
              >
                No, Don&apos;t Cancel
              </Button>
            </div>
            <div className='hidden flex-row items-center justify-center gap-8 md:flex'>
              <Button>Yes, Cancel it!</Button>
              <Button variant='secondary' onClick={() => toast.dismiss(t.id)}>
                No, Don&apos;t Cancel
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ),
      { duration: Infinity }
    )
  }
  return (
    <div className='text-gray-700 md:rounded-2xl md:bg-white md:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] md:px-6 md:pb-10'>
      <Header pageTitle='Rental Order Details' />
      <div className='text-center'>
        <p className='text-xl font-medium mb-3'>Thank you</p>
        <p>Your order status is as follows</p>
        <p className='text-sm'>
          <b>Order ID:</b> <span className='text-primary'># 1010246</span>
        </p>
      </div>
      <Animated className='flex flex-row items-center max-w-3xl gap-1 mx-auto w-full py-12 md:py-16'>
        <div className='h-1 w-[calc((100%-152px)/8)] bg-green-500 rounded-full'></div>
        <div className='w-[30px] h-[30px] border-[7px] rounded-full border-green-500 relative'>
          <span className='absolute -bottom-3 left-1/2 translate-y-full -translate-x-1/2 text-xs md:text-sm text-gray-700 text-center'>
            Order Pending
          </span>
        </div>
        <div className='h-1 w-[calc((100%-152px)/4)] bg-green-500 rounded-full'></div>
        <div className='w-[30px] h-[30px] rounded-full bg-gray-300 relative border-[7px] border-gray-300'>
          <span className='absolute -bottom-3 left-1/2 translate-y-full -translate-x-1/2 text-xs md:text-sm text-gray-700 text-center'>
            Order Confirmed
          </span>
        </div>
        <div className='h-1 w-[calc((100%-152px)/4)] bg-gray-300 rounded-full'></div>
        <div className='w-[30px] h-[30px] rounded-full bg-gray-300 relative border-[7px] border-gray-300'>
          <span className='absolute -bottom-3 left-1/2 translate-y-full -translate-x-1/2 text-xs md:text-sm text-gray-700 text-center w-16'>
            Order On the Way
          </span>
        </div>
        <div className='h-1 w-[calc((100%-152px)/4)] bg-gray-300 rounded-full'></div>
        <div className='w-[30px] h-[30px] rounded-full bg-gray-300 relative border-[7px] border-gray-300'>
          <span className='absolute -bottom-3 left-1/2 translate-y-full -translate-x-1/2 text-xs md:text-sm text-gray-700 text-center w-16'>
            Order Delivered
          </span>
        </div>
        <div className='h-1 w-[calc((100%-152px)/8)] bg-gray-300 rounded-full'></div>
      </Animated>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-[calc(40%-12px)]'>
          <Animated className='border rounded-lg'>
            <table className='table-auto w-full text-sm'>
              <tbody>
                <tr>
                  <td className='font-semibold px-4 pt-4 pb-2'>Order ID:</td>
                  <td className='px-4 pt-4 pb-2'>#1010146</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Rental Period:</td>
                  <td className='px-4 pt-4 pb-2'>10-10-24 to 12-10-24</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Order Date:</td>
                  <td className='px-4 py-2'>10-10-2024 09:09 AM</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Order Type:</td>
                  <td className='px-4 py-2'>Delivery</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Order Status:</td>
                  <td className='px-4 py-2'>
                    <StatusBar status='pending' />
                  </td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 pt-2 pb-4'>
                    Payment Status:
                  </td>
                  <td className='px-4 pt-2 pb-4'>
                    <div
                      className={`px-2 py-1 rounded-full w-fit ${
                        'Unpaid' !== 'Paid'
                          ? 'bg-red-300/30 text-red-500'
                          : 'bg-green-300/30 text-green-500'
                      }`}
                    >
                      Unpaid
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Animated>
          <Animated className='border rounded-lg mt-5'>
            <h3 className='font-semibold text-center mb-6 mt-3'>
              Billing Address
            </h3>
            <table className='table-auto w-full text-sm'>
              <tbody>
                <tr>
                  <td className='font-semibold px-4 pt-4 pb-2'>Name:</td>
                  <td className='px-4 pt-4 pb-2'>Sparsh Jaiswal</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Phone:</td>
                  <td className='px-4 py-2'>+8801253344</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Email:</td>
                  <td className='px-4 py-2'>sparsh@gmail.com</td>
                </tr>
                <tr>
                  <td className='font-semibold px-4 py-2'>Address:</td>
                  <td className='px-4 py-2'>
                    House 30, Road 1B, Block: A, Dubai 11
                  </td>
                </tr>
              </tbody>
            </table>
          </Animated>
        </div>
        <div className='w-full md:w-[calc(60%-12px)] flex flex-col justify-between gap-6'>
          <Animated className='border rounded-lg h-fit'>
            <div className='px-3 md:px-6 pt-5'>
              <h3 className='text-center text-lg font-semibold'>
                Order Summary
              </h3>
            </div>
            <div className='px-[11.5px] py-7 pt-5 md:px-6'>
              {cartItems.map((el, i) => (
                <div
                  key={i}
                  className={`w-full flex flex-row gap-4 items-stretch p-5 pt-6 `}
                >
                  <Image
                    src={el.img}
                    alt={el.name}
                    width={58}
                    height={58}
                    loading='lazy'
                    className='bg-white rounded-2xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)]'
                  />
                  <div className='flex-1 flex flex-row items-stretch'>
                    <div className='flex-1 flex flex-col justify-between'>
                      <div className='flex-1 flex flex-col justify-start'>
                        <span className='text-[10px] font-medium'>
                          {el.category}
                        </span>
                        <p className='text-lg'>{el.name}</p>
                      </div>
                      <p className='text-[10px]'>Quantity: {el.quantity}</p>
                    </div>
                    <div className='flex flex-col justify-end'>
                      <p className='text-xs font-medium'>Dhs {el.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='border-t border-gray-600 py-2 px-4 flex flex-row items-center justify-between mx-[11.5px] mb-4 md:mx-6'>
              <p className='font-semibold text-gray-700'>Total</p>
              <p className='font-semibold text-gray-700'>
                Dhs{' '}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </Animated>
          <Animated className='flex flex-row items-center justify-between md:justify-end md:gap-6 md:hidden'>
            <Link href='/profile/rental/receipt'>
              <Button size='sm'>Download Receipt</Button>
            </Link>
            <Button
              size='sm'
              variant='outline'
              className='border-red-500 text-red-500'
              onClick={handleCancel}
            >
              Cancel Order
            </Button>
          </Animated>
          <Animated className='flex-row items-center justify-end gap-6 hidden md:flex'>
            <Link href='/profile/rental/receipt'>
              <Button>Download Receipt</Button>
            </Link>
            <Button
              onClick={handleCancel}
              variant='outline'
              className='border-red-500 text-red-500'
            >
              Cancel Order
            </Button>
          </Animated>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails

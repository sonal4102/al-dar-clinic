import Image from 'next/image'
import Link from 'next/link'

import Button from './Button'

const ProductCard = ({ product }) => {
  return (
    <div className='w-80'>
      <div className='relative w-full h-[280px]'>
        <Image
          src={product.img}
          alt={product.name}
          fill
          className='object-cover rounded-2xl'
        />
      </div>
      <div className='flex flex-row justify-between items-center mt-5'>
        <h4 className='text-xl'>{product.name}</h4>
        <Link href={product.link || `/products/${product.id}`}>
          <Button size='sm'>Explore</Button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
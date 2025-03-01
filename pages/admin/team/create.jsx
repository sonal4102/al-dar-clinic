import { useRouter } from 'next/router'
import { FaArrowLeft, FaTrash, FaPlus } from 'react-icons/fa6'
import { useForm, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth'

const AddTeamMember = () => {
  const router = useRouter()
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)
  const { isAuthenticated } = useAuth()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/location/all')
        setLocations(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    }

    if (isAuthenticated) {
      fetchLocations()
    }
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('position', data.position)
      formData.append('file', data.picture)
      formData.append('locationId', data.location)
      formData.append('specialty', data.specialty)

      await axios.post('/team-member/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      router.push('/admin/team')
    } catch (error) {
      console.error('Error adding team member:', error)
    }
  }

  return (
    <div>
      <div className='h-[104px]'></div>

      {/* Fixed header */}
      <div className='bg-primary text-white px-8 md:px-20 py-8 flex items-center fixed top-[155px] md:top-0 w-full md:w-[calc(100%-288px)] z-10 right-0'>
        <Button onClick={() => router.back()} variant='ghost' size='icon'>
          <FaArrowLeft className='text-2xl' />
        </Button>
        <h1 className='text-2xl font-medium'>Add Team Member</h1>
      </div>
      <div className='px-8 xl:px-20 py-7 md:py-14'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6 p-4 max-w-2xl'
        >
          <div>
            <label className='block text-lg font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              {...register('name', {
                required: 'Name is required',
              })}
              className={`mt-1 block w-full border p-2 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm sm:text-sm`}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-red-500 text-sm mt-1'
              >
                {errors.name.message}
              </motion.p>
            )}
          </div>

          <div>
            <label className='block text-lg font-medium text-gray-700'>
              Position
            </label>
            <input
              type='text'
              {...register('position', {
                required: 'Position is required',
              })}
              className={`mt-1 block w-full border p-2 ${
                errors.position ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm sm:text-sm`}
            />
            {errors.position && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-red-500 text-sm mt-1'
              >
                {errors.position.message}
              </motion.p>
            )}
          </div>

          <div>
            <label className='block text-lg font-medium text-gray-700'>
              Clinic Location
            </label>
            {loading ? (
              <></>
            ) : (
              locations.length && (
                <select
                  {...register('location', {
                    required: 'Location is required',
                  })}
                  className={`mt-1 block w-full border p-2 ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm sm:text-sm`}
                >
                  <option value=''>Select Location</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              )
            )}
            {/* <input
              type='text'
              {...register('position', {
                required: 'Position is required',
              })}
              className={`mt-1 block w-full border p-2 ${
                errors.position ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm sm:text-sm`}
            /> */}
            {errors.location && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-red-500 text-sm mt-1'
              >
                {errors.location.message}
              </motion.p>
            )}
          </div>

          <div>
            <label className='block text-lg font-medium text-gray-700'>
              Specialty
            </label>
            <input
              type='text'
              {...register('specialty', {
                required: 'Specialty is required',
              })}
              className={`mt-1 block w-full border p-2 ${
                errors.specialty ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm sm:text-sm`}
            />
            {errors.specialty && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-red-500 text-sm mt-1'
              >
                {errors.specialty.message}
              </motion.p>
            )}
          </div>

          <div>
            <label className='block text-lg font-medium text-gray-700'>
              Picture
            </label>
            <Controller
              control={control}
              name='picture'
              rules={{
                required: 'Picture is required',
              }}
              render={({ field }) => (
                <>
                  <div className='mt-2 flex flex-wrap gap-2'>
                    {field.value && (
                      <div className='relative w-40 h-52 border rounded-md overflow-hidden group'>
                        <Image
                          src={URL.createObjectURL(field.value)}
                          alt='Selected'
                          className='w-full h-full object-cover'
                          width={80}
                          height={80}
                        />
                        <button
                          type='button'
                          onClick={() => field.onChange(null)}
                          className='absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                    {!field.value && (
                      <label
                        htmlFor='picture'
                        className={`w-20 h-20 rounded-md flex justify-center items-center text-white cursor-pointer text-4xl ${
                          errors.picture ? 'bg-red-500' : 'bg-primary'
                        }`}
                      >
                        <FaPlus />
                        <input
                          type='file'
                          id='picture'
                          accept='image/*'
                          onChange={(e) => field.onChange(e.target.files[0])}
                          className='hidden'
                        />
                      </label>
                    )}
                  </div>
                </>
              )}
            />
            {errors.picture && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-red-500 text-sm mt-1'
              >
                {errors.picture.message}
              </motion.p>
            )}
          </div>

          <Button type='submit' variant='primary' className='w-full'>
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AddTeamMember

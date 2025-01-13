import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import {
  register,
  login as loginUser,
  verify,
  logout,
  startLoading,
  endLoading,
} from '../redux/slices/authSlice'
import { useEffect } from 'react'

const useAuth = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth)

  // Check localStorage for userId and userToken
  const initializeAuth = async () => {
    if (!isAuthenticated) {
      const userId =
        localStorage.getItem('userId') || sessionStorage.getItem('userId')
      const userToken =
        localStorage.getItem('userToken') || sessionStorage.getItem('userToken')

      if (userId && userToken) {
        dispatch(startLoading('user'))
        try {
          const res = await axios.get(`/users/${userId}`, {
            headers: {
              Authorization: userToken,
            },
          })

          // Assuming the response contains user data
          dispatch(loginUser(res.data))
        } catch (error) {
          console.error('Error fetching user information:', error)
          dispatch(logout())
        } finally {
          dispatch(endLoading('user'))
        }
      }
    }
  }

  useEffect(() => {
    if (axios.defaults.baseURL === process.env.NEXT_PUBLIC_API_URL) {
      initializeAuth()
    }
  }, [])

  const login = async (credentials) => {
    dispatch(startLoading('login'))
    try {
      // API call to authenticate the user
      const res = await axios.post('/auth/login-email', credentials)

      // Extract user data and token from response
      const { id, token } = res.data

      if (credentials.remember) {
        // Save user data and token in localStorage
        localStorage.setItem('userId', id)
        localStorage.setItem('userToken', token)
      } else {
        // Save user data and token in sessionStorage
        sessionStorage.setItem('userId', id)
        sessionStorage.setItem('userToken', token)
      }

      // Update Redux store with user information
      dispatch(loginUser(res.data))

      // Show success message and redirect
      toast.success('Congrats! You have successfully logged in')
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
      toast.error(
        error?.response?.data?.message ||
          'Something went wrong with login. Please, try again!'
      )
    } finally {
      dispatch(endLoading('login'))
    }
  }

  const loginWithPhone = async (credentials) => {
    dispatch(startLoading('loginWithPhone'))
    try {
      // API call to authenticate the user using phone
      const res = await axios.post('/auth/login-phone', credentials)

      // Extract user data and token from response
      const { id, token } = res.data

      if (credentials.remember) {
        // Save user data and token in localStorage
        localStorage.setItem('userId', id)
        localStorage.setItem('userToken', token)
      } else {
        // Save user data and token in sessionStorage
        sessionStorage.setItem('userId', id)
        sessionStorage.setItem('userToken', token)
      }

      // Update Redux store with user information
      dispatch(loginUser(res.data))

      // Show success message and redirect
      toast.success(
        'Congrats! You have successfully logged in with your phone!'
      )
      router.push('/')
    } catch (error) {
      console.error('Login with phone error:', error)
      toast.error(
        error?.response?.data?.message ||
          'Something went wrong with login. Please, try again!'
      )
    } finally {
      dispatch(endLoading('loginWithPhone'))
    }
  }

  const logoutUser = () => {
    dispatch(logout())
    localStorage.removeItem('userId')
    localStorage.removeItem('userToken')
    toast.success('Logged out successfully.')
  }

  const resendEmail = async () => {
    dispatch(startLoading('resendEmail'))
    try {
      const res = await axios.post('/auth/resend-email-verification', {
        email: user.email,
      })
      toast.success(res.data.message)
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    } finally {
      dispatch(endLoading('resendEmail'))
    }
  }
  const resendPhone = async () => {
    dispatch(startLoading('resendPhone'))
    try {
      const res = await axios.post('/auth/resend-phone-verification', {
        phone: user.phone,
      })
      toast.success(res.data.message)
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    } finally {
      dispatch(endLoading('resendPhone'))
    }
  }

  const verifyEmail = async (data) => {
    dispatch(startLoading('verifyEmail'))
    try {
      const res = await axios.post('/auth/verify-email', {
        email: user.email,
        otp: data.code,
      })
      dispatch(verify(res.data))
      localStorage.setItem('userToken', res.data.token)
      localStorage.setItem('userId', res.data.id)
      toast.success('You have logged in successfully!')
      router.push('/')
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    } finally {
      dispatch(endLoading('verifyEmail'))
    }
  }

  const verifyPhone = async (data) => {
    dispatch(startLoading('verifyPhone'))
    try {
      const res = await axios.post('/auth/verify-phone', {
        phone: user.phone,
        otp: data.otp,
      })
      dispatch(verify(res.data))
      localStorage.setItem('userToken', res.data.token)
      localStorage.setItem('userId', res.data.id)
      toast.success('You have logged in successfully!')
      router.push('/')
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    } finally {
      dispatch(endLoading('verifyPhone'))
    }
  }

  const registerUser = async (credentials) => {
    dispatch(startLoading('register'))
    try {
      const newUser = {
        name: credentials.name,
        password: credentials.password,
      }
      if (credentials.email) {
        newUser.email = credentials.email
      } else {
        newUser.phone = credentials.phone
      }

      const res = await axios.post(
        `/auth/register-${credentials.email ? 'email' : 'phone'}`,
        newUser
      )

      // Handle user token and ID like in login
      const { id, token } = res.data

      if (credentials.remember) {
        localStorage.setItem('userId', id)
        localStorage.setItem('userToken', token)
      } else {
        sessionStorage.setItem('userId', id)
        sessionStorage.setItem('userToken', token)
      }

      // Update Redux store with user information
      dispatch(register(credentials))
      router.push(`/auth/verify-${credentials.email ? 'email' : 'phone'}`)

      toast.success(res.data.message)
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    } finally {
      dispatch(endLoading('register'))
    }
  }

  const forgotPassword = async (data) => {
    let didSucced = false
    dispatch(startLoading('forgotPassword'))
    try {
      const res = await axios.post('/auth/forgot-password', { ...data })
      toast.success(res.data.message)
      didSucced = true
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    }
    dispatch(endLoading('forgotPassword'))
    return didSucced
  }

  const resetPassword = async (data) => {
    dispatch(startLoading('resetPassword'))
    try {
      const res = await axios.post('/auth/reset-password', { ...data })
      toast.success(res.data.message)
      router.push('/auth/login')
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.message || 'Error')
    }
    dispatch(endLoading('resetPassword'))
  }

  return {
    isAuthenticated,
    user,
    loading,
    login,
    registerUser,
    resendEmail,
    logoutUser,
    resetPassword,
    verifyEmail,
    initializeAuth,
    resendPhone,
    verifyPhone,
    forgotPassword,
    loginWithPhone,
  }
}

export default useAuth

import React from 'react'
import InputField from '../common/InputField'

const Login = () => {
  return (
    <div className='flex flex-col gap-2 w-full h-full p-4'>
        <p className='text-center'>Log In or Sign Up</p>
        <div className='border-2 border-black p-4'>
            <InputField
                label='email'
                type='email'
                placeholder='Email'
                classname='border border-black w-full'
            />
            <InputField
                label='password'
                type='password'
                placeholder='Password'
                classname='border border-black w-full'
            />
        </div>
    </div>
  )
}

export default Login
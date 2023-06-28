import React from 'react'
import googleIcon from '../asset/googleIcon.png'
import appleIcon from '../asset/appleIcon.png'

const SignIn = () => {
    return (
        <div>

            <div className='flex md:hidden bg-black text-white justify-center items-center rounded-b-lg'>
                <h1 className='text-4xl font-bold p-3'>Board.</h1>
            </div>

            <div className='flex'>

                <div className='hidden md:flex w-2/5 h-screen justify-center items-center bg-black text-white'>
                    <h1 className='text-7xl font-bold'>Board.</h1>
                </div>

                <div className='w-screen md:w-3/5 h-screen bg-[#F5F5F5] flex flex-col justify-center items-center'>
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-2xl md:text-4xl font-bold'>Sign In</h1>
                        <h4 className='text-sm md:text-base font-[400] mt-1'>Sign in to your account</h4>

                        <div className='flex mt-4 space-x-4'>
                            <div className='flex items-center bg-white py-2 px-3 md:px-7 rounded-xl cursor-pointer'>
                                <img src={googleIcon} alt="" className='w-[14px] h-[14px]' />
                                <a href="/" className='text-[10px] md:text-xs font-normal ml-2 text-[#858585]'>Sign in with Google</a>
                            </div>

                            <div className='flex items-center bg-white py-2 px-3 md:px-7 rounded-xl cursor-pointer'>
                                <img src={appleIcon} alt="" className='w-[14px] h-[14px]' />
                                <a href="/" className='text-[10px] text-xs font-normal ml-2 text-[#858585]'>Sign in with Apple</a>
                            </div>
                        </div>

                        <div className='flex flex-col mt-5 bg-white p-6 rounded-3xl'>
                            
                            <label htmlFor="email" className='text-sm md:text-base font-normal'>Email Address</label>
                            <input type="email" name="email" id="email" className='bg-[#EAEAEA] mt-2 p-1 md:p-2 w-[250px] md:w-[325px] rounded-lg md:rounded-xl focus:outline-none text-sm md:text-base px-5 font-normal' />

                            <label htmlFor="password" className='text-sm mt-4 md:text-base font-normal'>Password</label>
                            <input type="password" name="password" id="password" className='bg-[#EAEAEA] mt-2 p-1 md:p-2 w-[250px] md:w-[325px] rounded-lg md:rounded-xl focus:outline-none text-sm md:text-base px-5 font-normal' />

                            <a href="/" className='text-[#346BD4] m-3 text-sm md:text-base text-start'>Forgot Password?</a>

                            <button type="submit" className='bg-black text-white h-10 rounded-xl text-sm md:text-base font-bold p-1 md:p-2'>Sign In</button>

                        </div>
                    </div>

                    <div className='items-center my-4'>
                            <span className='text-[#858585] text-sm md:text-base font-normal'>Don't have an account? </span>
                            <span className='text-[#346BD4] text-sm md:text-base font-normal'>Register here</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignIn

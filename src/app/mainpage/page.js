import React from 'react'
import Navbar from '../components/Navbar'

const Page = () => {
  return (
    <div className='bg-white' style={{ minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <div className='flex flex-col-reverse lg:flex-row lg:pt-70 md:pt-20 justify-between lg:px-40 px-3 gap-3'>
        <div>
          <h1 className='text-black text-5xl lg:text-7xl md:text-4xl'>Delicious Meals Delivered Fast 🚀</h1>
          <p className='text-black'>Craving something tasty? QuickDish brings your favorite meals right to your door <br /> — hot,
            fresh, and fast. From local classics to global bites, we’ve got it all!
          </p>
          <div className='flex text-white mt-15 gap-20'>
            <button className='bg-green-600 p-2 lg:p-4 font-bold hover:rotate-12'> 🛒 Order Now</button>
            <button className='bg-green-600 p-2 lg:p-4 font-bold hover:rotate-12'> 📖 View Menu</button>
          </div>
        </div>
        <div className=''>
          <img src="Package Delivery Scene.jpeg" alt=""/>
        </div>
      </div>
      <div className='mt-50 bg-emerald-100 p-10' style={{minHeight: '80vh'}}>
      <h1 className='text-3xl lg:text-5xl text-emerald-950 text-center font-bold'>Top Categories Available for you</h1>
      <div className='mt-40 flex flex-col lg:flex-row gap-3'>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="jollofrice.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="semo.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="icecream.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="sharwama.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="pastries.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="chicken.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
        <p className='border-4 border-white shadow-2xl rounded-4xl overflow-hidden'>
          <img src="pasta.jpeg" alt="" className='w-full object-cover h-full' />
        </p>
      </div>
      </div>
      <div style={{minHeight: '70vh'}} className=' bg-white p-10 '>
        <h1 className='text-3xl lg:text-5xl text-emerald-700 font-bold text-center'>All you just need to do is...</h1>
        <div className='flex flex-col lg:flex-row mt-20 lg:mt-50 justify-between gap-3 lg:px-40 text-black w-full'>
        <p className='border-3 border-black text-black p-3 rounded-3xl animate__animated animate__slideInLeft animate__infinite hover:bg-green-950 hover:text-white'> 🛒 Place Your Order </p>
        <p className='border-3 border-black text-black p-3 rounded-3xl animate__animated animate__slideInRight animate__infinite hover:bg-green-950 hover:text-white'> ✅ Order Confirmed</p>
        <p className='border-3 border-black text-black p-3 rounded-3xl animate__animated animate__slideInLeft animate__infinite hover:bg-green-950 hover:text-white'> 🛵 Rider Pick-up</p>
        <p className='border-3 border-black text-black p-3 rounded-3xl animate__animated animate__slideInRight animate__infinite hover:bg-green-950 hover:text-white'> 📦 Doorstep Delivery</p>
        </div>
      </div>
      <div style={{height: '30vh'}} className='bg-black flex justify-between pt-30 gap-4 px-3 lg:px-10'>
        <p>QuickDish...</p>
        <p>
          © 2025 QuickDish | All rights reserved 
        </p>
        <p className=' text-white '> Contact Us </p>
      </div>
    </div>
  )
}

export default Page
import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className='bg-white' style={{ height: '100vh', width: '100%' }}>
      <Navbar />
      <div className='flex pt-70 justify-between px-40'>
        <div>
          <h1 className='text-black' style={{ fontSize: '4rem' }}>Delicious Meals Delivered Fast 🚀</h1>
          <p className='text-black'>Craving something tasty? QuickDish brings your favorite meals right to your door <br /> — hot,
            fresh, and fast. From local classics to global bites, we’ve got it all!
          </p>
          <div className='flex text-white mt-15 gap-20'>
            <button className='bg-green-600 p-4 font-bold'> 🛒 Order Now</button>
            <button className='bg-green-600 p-4 font-bold'> 📖 View Menu</button>
          </div>
        </div>
        <div className='border-green-600 border-4 rounded-2xl'>
          <img src="Package Delivery Scene.jpeg" alt="" width={800} height={800} />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default page
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-white text-green-600 font-bold flex justify-between py-5 lg:px-40 px-2 shadow-xl' style={{ position: 'fixed', width: '100%' }}>
            <p className='text-2xl'>QuickDish</p>
            <div className='flex gap-7 lg:gap-25'>
                <Link href='/mainpage/order'>
                    <p>Order</p>
                </Link>
                <Link href='/mainpage/contact'>
                    <p>Contact us</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
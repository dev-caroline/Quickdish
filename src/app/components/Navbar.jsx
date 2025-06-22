import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-white text-green-600 font-bold flex justify-between py-5 px-40 shadow-xl' style={{ position: 'fixed', width: '100%' }}>
            <p style={{ fontSize: '1.5em' }}>QuickDish..</p>
            <div className='flex gap-25'>
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
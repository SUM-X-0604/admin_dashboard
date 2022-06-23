import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { FcProcess } from 'react-icons/fc'
import { FiThumbsUp } from 'react-icons/fi'
import { MdDoneOutline } from 'react-icons/md'

const OrderSection = () => {
    return (
        <div className='px-10 py-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4'>

            {/* first item */}
            <div className='orderCard'>
                <div className='flex flex-col gap-2'>
                    <p className='text-base text-gray-600 uppercase'>Pending Order</p>
                    <p className='font-semibold text-lg'>203</p>
                </div>
                <div className='h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center'>
                    <BsFillCartFill className='text-white h-5 w-5' />
                </div>
            </div>

            {/* second item */}
            <div className='orderCard'>
                <div className='flex flex-col gap-2'>
                    <p className='text-base text-gray-600 uppercase'>Processing Order</p>
                    <p className='font-semibold text-lg '>99</p>
                </div>
                <div className='h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center'>
                    <FcProcess className='text-white h-5 w-5' />
                </div>
            </div>

            {/* third item */}
            <div className='orderCard'>
                <div className='flex flex-col gap-2'>
                    <p className='text-base text-gray-600 uppercase'>Ready to deliver</p>
                    <p className='font-semibold text-lg'>263</p>
                </div>
                <div className='h-10 w-10 rounded-full bg-green-500 flex items-center justify-center'>
                    <FiThumbsUp className='text-white h-5 w-5' />
                </div>
            </div>

            {/* fourth item */}
            <div className='orderCard'>
                <div className='flex flex-col gap-2'>
                    <p className='text-base text-gray-600 uppercase'>delivered orders</p>
                    <p className='font-semibold text-lg'>346</p>
                </div>
                <div className='h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center'>
                    <MdDoneOutline className='text-white h-5 w-5' />
                </div>
            </div>

        </div>
    )
}

export default OrderSection
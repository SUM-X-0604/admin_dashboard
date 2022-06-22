import React from 'react'
import shirt from '../assets/cloth.png';
import shoes from '../assets/sneakers.png';
import cap from '../assets/baseball-cap.png';
import jersey from '../assets/jersey.png';
import suit from '../assets/suit.png';


const DeliverySection = () => {
    return (
        <div className='w-full py-8 px-4 flex flex-col flex-wrap items-start justify-start rounded-lg bg-white gap-4'>
            {/* order header */}
            <div className='px-2 pb-8 flex items-center justify-between rounded-xl gap-3'>
                <p className='text-md text-gray-500'>
                    Today's Delivery
                </p>
                <input type="text" placeholder='Search here' className='w-full h-full bg-transparent outline-none border-none placeholder:text-gray-400' />
                <select name="" id="" className='text-base outline-none border-b-2 cursor-pointer rounded-lg border-gray-400 p-2 bg-white'>
                    <option value="" className='outline-none text-xs '>
                        Select
                    </option>
                </select>
            </div>

            {/* first order card */}
            <div className='w-full h-full px-4 rounded-xl border-l-4 border border-yellow-500'>
                <div className='pt-2 w-full flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-600'>98659865</p>
                    <p className='text-sm font-semibold text-gray-600'>ORD-0948</p>
                </div>
                <div className='py-4 h-full w-full flex items-start'>
                    <img src={shirt} alt="" className='w-8 h-8' />
                </div>
            </div>

            {/* second order card */}
            <div className=' w-full h-full px-4 rounded-xl border-l-4 border border-red-700'>
                <div className='pt-2 w-full flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-600'>98659865</p>
                    <p className='text-sm font-semibold text-gray-600'>ORD-0948</p>
                </div>
                <div className='py-4 h-full w-full flex items-start gap-3'>
                    <img src={shirt} alt="" className='w-8 h-8' />
                    <img src={shirt} alt="" className='w-8 h-8' />
                </div>
            </div>

            {/* third order card */}
            <div className=' w-full h-full px-4 rounded-xl border-l-4 border border-gray-700'>
                <div className='pt-2 w-full flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-600'>98659865</p>
                    <p className='text-sm font-semibold text-gray-600'>ORD-0948</p>
                </div>
                <div className='py-4 h-full w-full flex items-start gap-3'>
                    <img src={cap} alt="" className='w-8 h-8' />
                </div>
            </div>

            {/* foutrh order card */}
            <div className=' w-full h-full px-4 rounded-xl border-l-4 border border-gray-700'>
                <div className='pt-2 w-full flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-600'>98659865</p>
                    <p className='text-sm font-semibold text-gray-600'>ORD-0948</p>
                </div>
                <div className='py-4 h-full w-full flex items-start gap-3'>
                    <img src={shoes} alt="" className='w-8 h-8' />
                    <img src={cap} alt="" className='w-8 h-8' />
                </div>
            </div>

            {/* fifth order card */}
            <div className=' w-full h-full px-4 rounded-xl border-l-4 border border-blue-500'>
                <div className='pt-2 w-full flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-600'>98659865</p>
                    <p className='text-sm font-semibold text-gray-600'>ORD-0948</p>
                </div>
                <div className='py-4 h-full w-full flex items-start gap-3'>
                    <img src={suit} alt="" className='w-8 h-8' />
                    <img src={suit} alt="" className='w-8 h-8' />
                    <img src={cap} alt="" className='w-8 h-8' />
                </div>
            </div>

            {/* sixth order card */}
            <div className=' w-full h-full px-4 rounded-xl border-l-4 border border-blue-500 '>
                <div className='pt-2 w-full flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-600'>98659865</p>
                    <p className='text-sm font-semibold text-gray-600'>ORD-0948</p>
                </div>
                <div className='py-4 h-full w-full flex items-start gap-3'>
                    <img src={shoes} alt="" className='w-8 h-8' />
                    <img src={jersey} alt="" className='w-8 h-8' />
                    <img src={jersey} alt="" className='w-8 h-8' />
                    <img src={jersey} alt="" className='w-8 h-8' />
                </div>
            </div>

        </div>
    )
}

export default DeliverySection;
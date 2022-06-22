import React from 'react'
import PieChart from './PieChart'

const Overview = () => {


    return (
        <>
            <div className='py-8 flex flex-col items-center justify-center bg-white w-full h-full rounded-lg'>
                <p className='text-lg text-gray-500 font-semibold'>Overview</p>
                {/* chart */}
                <div className='w-full h-full flex items-center justify-center'>
                    <PieChart />
                </div>
            </div>
        </>
    )
}

export default Overview

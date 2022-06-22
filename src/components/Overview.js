import React from 'react'
import PieChart from './PieChart'

const Overview = () => {


    return (
        <>
            <div className='py-12 flex flex-col items-center bg-white w-full h-full rounded-2xl'>
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

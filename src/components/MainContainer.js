import React from 'react'
import OrderSection from './OrderSection';
import Header from './Header'
import DeliverySection from './DeliverySection'
import Overview from './Overview';

const MainContainer = ({ sidebarHandler }) => {
    return (
        <>
            <div className='w-full h-full top-0 flex flex-col items-center '>
                <div className='w-full h-full flex flex-col items-center'>
                    <Header sidebarHandler={sidebarHandler} />
                    <OrderSection />
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center justify-between px-10 gap-3 sm:gap-6'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <DeliverySection />
                    </div>
                    <div className='w-full h-full pt-12 md:pt-2 flex items-start justify-center'>
                        <Overview />
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainContainer;
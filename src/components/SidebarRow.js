import React from 'react';

const SidebarRow = ({ Icon, title }) => {


    return (
        <>
            <div className='flex items-center space-x-4 md:space-x-10 p-4 hover:bg-blue-400 rounded-xl cursor-pointer'>
                {Icon && <Icon className="h-8 w-8 cursor-pointer" />
                }
                <p className='hidden md:inline-block text-lg text-gray-500 font-semibold'>{title}</p>
            </div>
        </>
    )
}

export default SidebarRow
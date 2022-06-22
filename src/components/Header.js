import React, { useState } from 'react';
import { AiFillPlusCircle, AiOutlineUser } from 'react-icons/ai';
import { BsFillTagFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ sidebarHandler }) => {

    return (
        <>
            <div className='pt-8 px-4 w-full h-full flex items-center justify-between'>
                <div className='flex items-center md:items-start'>
                    <GiHamburgerMenu className='text-white text-xl cursor-pointer' onClick={sidebarHandler} />
                </div>

                <div className='flex items-center justify-center gap-4'>
                    <AiFillPlusCircle className='text-lg text-white cursor-pointer' />
                    <AiOutlineUser className='text-lg text-white cursor-pointer' />
                    <BsFillTagFill className='text-lg text-white cursor-pointer' />
                </div>

            </div>
        </>
    )
}

export default Header
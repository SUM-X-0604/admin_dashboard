import React from 'react'
import {
    BsFillImageFill,
    BsFillTagFill,
    BsFillCartFill,
    BsMenuUp,
    BsTag,
} from 'react-icons/bs'
import {
    AiOutlineUser,
    AiOutlineBarChart,
    AiFillSetting,
    AiOutlineLogout,
    AiOutlineHome,
} from 'react-icons/ai';
import { FaAddressBook } from 'react-icons/fa'

const Sidebar = ({ menu }) => {

    return (
        <div className={`hidden lg:inline-block p-2 mt-6 max-w-[150px] ${menu ? 'md:w-[100px] justify-center' : 'md:min-w-[230px]'} bg-white rounded-2xl`} >

            {/* Laundary */}
            <div className='pb-12 sidebarMain' >
                <BsFillImageFill className="h-6 w-6 md:h-8 md:w-8  cursor-pointer" />
                <p className={menu ? 'hidden' : ' md:inline-block text-xl text-gray-500 font-semibold uppercase'}>Laundary</p>
            </div >

            {/* Dashboard */}
            <div className='flex items-center space-x-4 md:space-x-10 p-4 hover:bg-blue-400 hover:text-white rounded-xl cursor-pointer' >
                <AiOutlineHome className="h-4 w-4 md:h-6 md:w-6 cursor-pointer " />
                <p className={menu ? 'hidden' : 'sidebarText'}>Dashboard</p>
            </ div>

            {/* Tag */}
            <div className='sidebarMain' >
                <BsTag className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-red-500" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Pos</p>
            </div >

            {/* order */}
            <div className='sidebarMain' >
                <BsFillCartFill className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-green-400" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Orders</p>
            </div >

            {/* order status screen */}
            <div className='sidebarMain' >
                <BsMenuUp className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-yellow-400" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Order Status</p>
            </ div>

            {/* expense */}
            <div className='sidebarMain' >
                <AiOutlineBarChart className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-red-400" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Expenses</p>
            </div>

            {/* cursomers */}
            <div className='sidebarMain' >
                <AiOutlineUser className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-violet-600" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Customers</p>
            </div>

            {/* services */}
            <div className='sidebarMain' >
                <BsFillTagFill className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-blue-700" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Services</p>
            </div >

            {/* reports */}
            <div className='sidebarMain' >
                <FaAddressBook className="h-6 w-6 md:h-8 md:w-8  cursor-pointer text-yellow-300" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Reports</p>
            </ div>

            {/* tools */}
            <div className='sidebarMain' >
                <AiFillSetting className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-yellow-600" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Tools</p>
            </ div>

            {/* logout */}
            <div className='sidebarMain' >
                <AiOutlineLogout className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-gray-600" />
                <p className={menu ? 'hidden' : 'sidebarText'}>Logout</p>
            </ div>

        </div >
    );
}

export default Sidebar
import React from 'react'
import {
    BsFillImageFill,
    BsFillTagFill,
    BsFillCartFill,
    BsMenuUp
} from 'react-icons/bs'
import {
    AiFillHome,
    AiOutlineUser,
    AiOutlineBarChart,
    AiFillSetting,
    AiOutlineLogout
} from 'react-icons/ai';
import { FaAddressBook } from 'react-icons/fa'
// import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'
import SidebarRow from './SidebarRow';



const Sidebar = () => {

    // const [showTitle, setShowTitle] = useState(false);

    // const TitleHandler = () => {

    // }

    return (
        <div className='hidden sm:inline-block p-2 mt-2 max-w-[150px] md:min-w-[250px] bg-white rounded-2xl'>
            <SidebarRow
                Icon={BsFillImageFill}
                title="Laundary"
            />
            <SidebarRow
                Icon={AiFillHome}
                title="Dashboard"
            />
            <SidebarRow
                Icon={BsFillTagFill}
                title="Pos"
            />
            <SidebarRow
                Icon={BsFillCartFill}
                title="Orders"
            />
            <SidebarRow
                Icon={BsMenuUp}
                title="Order Status"
            />
            <SidebarRow
                Icon={FaAddressBook}
                title="Expenses"
            />
            <SidebarRow
                Icon={AiOutlineUser}
                title="Customers"
            />
            <SidebarRow
                Icon={BsFillTagFill}
                title="Services"
            />
            <SidebarRow
                Icon={AiOutlineBarChart}
                title="Report"
            />
            <SidebarRow
                Icon={AiFillSetting}
                title="Tool"
            />
            <SidebarRow
                Icon={AiOutlineLogout}
                title="Logout"
            />
            {/* <div className='flex items-center justify-center py-4'>
                <BiLeftArrowCircle className="h-8 w-8 cursor-pointer"
                    onClick={TitleHandler} />
            </div> */}
        </div>
    );
}

export default Sidebar
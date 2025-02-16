"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { Progress } from "@/components/ui/progress"
import Link from 'next/link';

const Sidebar = () => {
    const path = usePathname();
    const Menu = [
        {
            id : 1,
            name: 'Home',
            icon : <HiOutlineHome />,
            link: '/dashboard',
        },
        {
            id : 1,
            name: 'Explore',
            icon : <MdOutlineExplore />,
            link: '/dashboard/explore',
        },
        {
            id : 1,
            name: 'Upgrade',
            icon : <GoShieldCheck />,
            link: '/dashboard/upgrade',
        },
        {
            id : 1,
            name: 'Logout',
            icon : <TbLogout />,
            link: '/dashboard/logout',
        }
    ]
  return (
    <div className='fixed md:w-64 h-full p-5 shadow-md'>
        <Image src={'/logo.png'} width={150} height={100}/>
        <hr className='my-5'/>
        <ul>
            {Menu.map((item,index) => (
                <Link href={item.link} key={index}>
                   <div className={`flex items-center gap-2 text-gray-500 p-3 cursor-pointer
                hover:bg-gray-100 hover:text-black rounded-lg mb-3
                ${path===item.link && 'bg-gray-100 text-black' }`}>
                   <div className='text-2xl'>{item.icon} </div>
                   <h2>{item.name}</h2>
                </div> 
                </Link>
                
            ))}
        </ul>
        <div className='absolute bottom-10 w-[80%]'>
        <Progress value={33} />
        <h2 className='text-sm my-2 font-bold'>3 Out off 5 courses created</h2>
        <h2 className='text-xs text-gray-500'>Upgrade your plan for ulimited course generation</h2>
        </div>

    </div>
  )
}

export default Sidebar
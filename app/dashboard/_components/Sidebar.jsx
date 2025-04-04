"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { MdOutlineExplore } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";

const Sidebar = () => {
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

  useEffect(() => {
    setUserCourseList(JSON.parse(localStorage.getItem("userCourseList")));
  }, []);

  const path = usePathname();

  const Menu = [
    { id: 1, name: "Home", icon: <HiOutlineHome />, link: "/dashboard" },
    { id: 2, name: "Explore", icon: <MdOutlineExplore />, link: "/dashboard/explore" },
    { id: 4, name: "Logout", icon: <TbLogout />, link: "/dashboard/logout" },
  ];

  return (
    <div className="fixed md:w-64 h-full p-6 bg-black shadow-lg flex flex-col">
      {/* Logo */}
      <div className="flex justify-center">
        <h1 className="text-white font-extrabold text-4xl">WorkWise</h1>
      </div>

      {/* Menu List */}
      <ul className="mt-6 space-y-3">
        {Menu.map((item) => (
          <Link href={item.link} key={item.id}>
            <div
              className={`flex items-center gap-4 text-gray-400 p-3 rounded-lg cursor-pointer
                transition-all duration-300 ease-in-out hover:bg-gray-700 hover:text-white shadow-md
                ${path === item.link ? "bg-gray-600 text-white" : ""}
              `}
            >
              <span className="text-2xl">{item.icon}</span>
              <h2 className="text-lg font-medium">{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      {/* Progress Bar Section */}
      <div className="absolute bottom-10 w-[80%] text-center text-gray-400">
        <Progress value={(userCourseList?.length / 5) * 100} className="bg-gray-600" />

        <h2 className="text-sm my-2">
          {userCourseList?.length} Out of 5 Courses Created
        </h2>

        <Link href="/dashboard/upgrade">
          <h2
            className={`text-xs underline transition-all ${
              (userCourseList?.length / 5) * 100 >= 60 ? "text-white hover:text-gray-300" : "text-gray-500"
            }`}
          >
            Upgrade your plan for unlimited course generation
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
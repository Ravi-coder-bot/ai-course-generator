import React from 'react'
import Image from 'next/image'
import { HiOutlinePuzzle } from "react-icons/hi";
import { Button } from "@/components/ui/button";



const CourseBasicInfo = ({course}) => {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-col-1 md:grid-cols-2 gap-10'>
            {/* Title */}
            <div>
                <h2 className="text-3xl font-bold flex gap-1">
                            {course?.courseOutput?.CourseName}
                          </h2>
                          <p className="text-sm text-gray-400 mt-3">
                            {course?.courseOutput?.Description}
                          </p>
                          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
                            <HiOutlinePuzzle size={20} />
                            {course?.category}
                          </h2>
            </div>
            <div>
                <Image src={'/placeholder.png'} width={300} height={300} alt="Course Banner"
                className='w-full rounded-xl object-cover h-[250px] ' />


            </div>
        </div>
    </div>
  )
}

export default CourseBasicInfo
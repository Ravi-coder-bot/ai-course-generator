import React from 'react'
import Image from 'next/image'
import { HiOutlinePuzzle } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { useState } from 'react';




const CourseBasicInfo = ({course, refreshData}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    
    const onFileSelected = (e) => {
        const file = e.target.files[0];
        setSelectedFile(URL.createObjectURL(file));
        refreshData(true);
      };

  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-col-1 md:grid-cols-2 gap-10'>
            {/* Title */}
            <div>
                <h2 className="text-3xl font-bold flex gap-1">
                            {course?.courseOutput?.CourseName}
                          </h2>
                          <EditCourseBasicInfo course={course} refreshData={() => refreshData(true)}/> 
                          <p className="text-sm text-gray-400 mt-3">
                            {course?.courseOutput?.Description}
                          </p>
                          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
                            <HiOutlinePuzzle size={20} />
                            {course?.category}
                          </h2>
                          <Button className="w-full mt-5">Start</Button>
            </div>
            <div>
                <label htmlFor="course-banner">
                     <Image src={ selectedFile ? selectedFile : '/placeholder.png'} width={300} height={300} alt="Course Banner"
                className='w-full rounded-xl object-cover h-[250px] cursor-pointer' />
                </label>
               
                <input type="file" className="opacity-0" id="course-banner" onChange={onFileSelected}/>


            </div>
        </div>
    </div>
  )
}

export default CourseBasicInfo
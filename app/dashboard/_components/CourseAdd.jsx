"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useContext } from 'react'
import { UserCourseListContext } from '@/app/_context/UserCourseListContext'

const CourseAdd = () => {
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
    const {user} = useUser();
  return (
    <div className='flex item-center justify-between'>
        <div>
            <h1 className='text-3xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h1>
            <p className='text-sm text-gray-500'>Create new course with AI , share with friends and earn from it </p>
        </div>
        <Link href={
              userCourseList?.length >= 5 ? "/dashboard/upgrade" : "/create-course"
            }>
         <Button>+ Create AI Course</Button>
        </Link>
       
    </div>
  )
}

export default CourseAdd
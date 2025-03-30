"use client"
import React from 'react'
import { useEffect ,useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { CourseList } from '@/configs/schema'
import { db } from '@/configs/db'
import LoadingDialog from '../_components/LoadingDialog'
import { Button } from '@/components/ui/button'
import CourseBasicInfo from './_components/CourseBasicInfo'


const CourseLayout = ({params}) => {
    const { user } = useUser();
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
          params && GetCourse();
        },[params,user]);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
        .where(and(eq(CourseList.courseId, params?.courseId),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)));
                setCourse(result[0]);
                
                console.log(result);

    }
  return (
     <>
          <LoadingDialog loading={loading} />
          <div className="mt-10 px-7 md:px-20 lg:px-44">
            <h2 className="font-bold text-center text-2xl">Course Layout</h2>
            {/* Basic Info */}
            <CourseBasicInfo course={course} />
            
            {/* Course Detail */}
            
            {/* List of Lesson */}
           
            <Button  className="my-10">
              Generate Course Content
            </Button>
          </div>
        </>
  )
}

export default CourseLayout
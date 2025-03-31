
import React from 'react'
import CourseAdd from './_components/CourseAdd'
import UserCourseList from './_components/UserCourseList'

const Dashboard = () => {
  return (
    <div>
        <CourseAdd/>
       {/* List of course Displaying */}
        <UserCourseList/>


    </div>
  )
}

export default Dashboard
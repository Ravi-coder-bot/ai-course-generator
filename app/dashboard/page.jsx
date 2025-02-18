
import React from 'react'
import CourseAdd from './_components/CourseAdd'
import ChatBot from '@/components/ChatBot'
import Warning from '@/components/Warning'
const Dashboard = () => {
  return (
    <div>
        <CourseAdd/>
        <Warning/>
      <ChatBot/>
    </div>
  )
}

export default Dashboard
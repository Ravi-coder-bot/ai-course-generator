import React from 'react'
import Header from '../../components/Header1'

const CreateCourseLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default CreateCourseLayout
import React from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'
import { ToastContainer, Slide } from "react-toastify";

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className='md:w-64  hidden md:block'>
        <Sidebar/>
      </div>
      <div className='md:ml-64'>
        <Header/>
        <ToastContainer
              position="top-right"
              autoClose={1500}
              limit={3}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="colored"
              transition={Slide}
            />
        <div className='p-10'>
          {children}
        </div>
        
      </div>
        
    </div>
  )
}

export default DashboardLayout
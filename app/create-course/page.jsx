'use client'
import React, { useState } from 'react'
import { HiViewGrid } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import { HiClipboardCheck } from "react-icons/hi";
import { Button } from '@/components/ui/button';

const CreateCourse = () => {
  const StepperOptions =[
    {
      id : 1,
      title : "Category",
      description : "Select a category for your course",
      icon : <HiViewGrid />
    },
    {
      id : 2,
      title : "Topic and Desc",
      description : "Write a description and topic for your course",
      icon : <HiLightBulb />
    },
    {
      id : 3,
      title : "Options",
      description : "Select options for your course",
      icon : <HiClipboardCheck />
    }
  ]

  const [activeIndex,setActiveIndex]  = useState(0)
  return (
    <div>

        <div className='flex flex-col justify-center items-center mt-10'>
          <h2 className='text-primary text-4xl font-medium'>Create Course</h2>
          <div className='flex mt-10'>
            {StepperOptions.map((item,index)=>(
              <div className='flex items-center'>
                <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                  <div className={`bg-gray-200 rounded-full p-3 text-white ${activeIndex>=index && "bg-purple-500"}`}>
                     {item.icon}
                  </div>
                  <h2 className='hidden md:block md:text-sm'>{item.title}</h2>
                </div>
                {index!= StepperOptions.length-1 && 
                <div className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] bg-gray-300 rounded-full ${activeIndex>=index+1 && "bg-purple-500"}`}>
                </div>
                }
              </div>
            ))}
          </div>
        </div>
        <div className='px-10 md:px-20 lg:px-44 mt-10'>

       


        <div className='flex justify-between mt-10'>
          <Button disabled={activeIndex == 0} onClick={() => setActiveIndex(activeIndex - 1)} className="hover:bg-primary hover:text-primary-foreground"
          variant="outline"
            >Previous</Button>
          {activeIndex<2 && <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>}
          {activeIndex==2 && <Button>Gnerate Course Layout</Button>}
        </div>
       </div>
    </div>
  )
}

export default CreateCourse
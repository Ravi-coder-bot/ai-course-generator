import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { BackgroundBeamsWithCollision } from '@/components/ui/BackgroundBeams'  

const Hero = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <BackgroundBeamsWithCollision>
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div className="mx-auto max-w-xl text-center">
      <TextGenerateEffect className="text-3xl font-extrabold sm:text-5xl" words="AI Course Genrator custom learning paths,powerd by AI" />
        <p className="mt-4 sm:text-xl/relaxed">
        Unlock personalized education with our AI-powered course generator.
        Tailor your learning path to your goals and interests.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block  w-full rounded-sm px-12 py-3 text-sm font-medium text-primary shadow-sm hover:text-primary focus:ring-3 focus:outline-hidden sm:w-auto"
            href="#"
          >
            <div className='flex gap-2'>
                <Image src={'/play_icon.png'} width={20} height={20}></Image>
            Demo Vedio
            </div>
            
          </a>
        </div>
      </div>
    </div>
    
     
    </BackgroundBeamsWithCollision>
  </section>
  )
}

export default Hero
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { HiAcademicCap } from "react-icons/hi";
import { ModeToggle } from '@/components/ui/ModeToggle';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm bg-black text-white'>
      <HiAcademicCap className='text-white text-2xl' />
      <div className='flex gap-2'>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;

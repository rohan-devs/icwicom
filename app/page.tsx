'use client';

import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'
export default function Home() {
  
  const { theme, setTheme } = useTheme();
  return (
    <>
    <div className=' flex justify-center overflow-auto my-[90px] '>
      
    </div>
    </>
  )
}

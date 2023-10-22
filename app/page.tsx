'use client';
import Hero from "@/components/Hero";
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'
import Aboutus from "@/components/Aboutus";
export default function Home() {
  
  const { theme, setTheme } = useTheme();
  return (
    <>
    <div className=' overflow-auto  '>
      

<Hero/>
<Aboutus/>
    


    </div>
    </>
  )
}

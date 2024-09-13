'use client'
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/utils/cn"

const page = () => {
  return (
      <div className=" text-center mt-[250px]">
        <Boxes />
        <h1 className="text-center text-7xl font-bold font-sans mb-5">About Us</h1>
        <p className="font-thin text-lg max-w-lg mx-auto">Welcome to Kwel_Music, where music meets passion, and learning becomes a journey of creativity and self-expression. Our platform is designed for musicians of all levels—whether you're picking up an instrument for the first time or refining your skills, we provide the resources, tools, and community to help you thrive.    
        </p>
    </div>
  )
}

export default page
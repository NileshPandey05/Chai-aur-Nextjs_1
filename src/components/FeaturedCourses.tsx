"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient"
const FeaturedCourses = () => {
  return (
    <div className="flex flex-row justify-evenly"> 
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h2>Guitar Fundamentals</h2>
                <p>Learn the basic of playing guitar with our comrehensive beginner's course</p>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Learn More
                    </div>
                </button>
            </BackgroundGradient>
        </div>
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h2>Advance Vocal Techniques</h2>
                <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners</p>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Learn More
                    </div>
                </button>
            </BackgroundGradient>
        </div>
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h2>Guitar Fundamentals</h2>
                <p>Learn the basic of playing guitar with our comrehensive beginner's course</p>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Learn More
                    </div>
                </button>
            </BackgroundGradient>
        </div>
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h2>Guitar Fundamentals</h2>
                <p>Learn the basic of playing guitar with our comrehensive beginner's course</p>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Learn More
                    </div>
                </button>
            </BackgroundGradient>
        </div>
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h2>Guitar Fundamentals</h2>
                <p>Learn the basic of playing guitar with our comrehensive beginner's course</p>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Learn More
                    </div>
                </button>
            </BackgroundGradient>
        </div>
    </div>
  )
}

export default FeaturedCourses
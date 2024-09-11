"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient"
import courseData from "@/data/music_courses.json"
import Link from "next/link";

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean
}
const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="flex flex-col justify-center items-center font-sans space-y-8 bg-gray-900 py-12">
        <div className="text-center space-y-3">
            <h3 className="text-[13px] text-teal-600">FEATURED COURSES</h3>
            <h1 className="text-4xl font-bold ">Learn With the Best</h1>
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-5">
            {featuredCourses.map((course:Course) => (
                <BackgroundGradient key={course.id} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 space-y-5">
                {/* <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                /> */}
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <Link href={`/courses/${course.slug}`} className="">
                        <button className="p-[3px] relative mt-5">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            Learn More
                            </div>
                        </button>
                    </Link>
                </BackgroundGradient>
            ))}
        </div>
        <div>
            <Link href={"/courses"}>
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    View All Courses
                </div>
            </button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses
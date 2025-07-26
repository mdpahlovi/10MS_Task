import { CourseData } from "@/types/course";
import CourseMedia from "./media";

export default function CourseHeader({ course }: { course: CourseData }) {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 items-center container mx-auto px-6">
                <div className="py-5">
                    <h1 className="text-4xl font-bold leading-tight">{course.title}</h1>
                    <div className="mt-4" dangerouslySetInnerHTML={{ __html: course.description }} />
                </div>
                <div className="px-5 pt-5 bg-white">
                    <CourseMedia media={course.media} />
                </div>
            </div>
        </div>
    );
}

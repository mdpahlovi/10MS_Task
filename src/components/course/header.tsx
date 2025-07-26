import { CourseData } from "@/types/course";

export default function CourseHeader({ course }: { course: CourseData }) {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold leading-tight">{course.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: course.description }} />
            </div>
        </div>
    );
}

import { CourseData } from "@/types/course";

export default function CourseHeader({ course }: { course: CourseData }) {
    return <div>{course.title}</div>;
}

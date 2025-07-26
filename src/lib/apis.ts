import type { CourseData } from "@/types/course";

export async function getCourseData(lang: "en" | "bn" = "en"): Promise<CourseData> {
    const response = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-TENMS-SOURCE-PLATFORM": "web",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch course data");
    }

    const json = await response.json();

    if (!json.data) throw new Error("Something went wrong");

    return json.data;
}

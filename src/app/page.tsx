import CourseAbout from "@/components/course/about";
import CourseChecklist from "@/components/course/checklist";
import CourseCta from "@/components/course/cta_button";
import CourseFeatureExplanations from "@/components/course/feature_explanations";
import CourseFeatures from "@/components/course/features";
import CourseHeader from "@/components/course/header";
import CourderInstructors from "@/components/course/instructors";
import CoursePointers from "@/components/course/pointers";
import RenderSections from "@/components/course/sections";
import { getCourseData } from "@/lib/apis";

interface PageProps {
    searchParams: Promise<{ lang?: "en" | "bn" }>;
}

export default async function CoursePage({ searchParams }: PageProps) {
    const lang = (await searchParams).lang;
    const data = await getCourseData(lang);

    return (
        <div className="min-h-screen">
            <CourseHeader course={data} />

            <div className="layout mb-6">
                <div className="mt-6 space-y-6 order-last lg:order-first">
                    <RenderSections
                        sections={[
                            { type: "instructors", component: CourderInstructors },
                            { type: "features", component: CourseFeatures },
                            { type: "pointers", component: CoursePointers },
                            { type: "feature_explanations", component: CourseFeatureExplanations },
                            { type: "about", component: CourseAbout },
                        ]}
                        course={data}
                    />
                </div>

                <div className="px-5 pb-5 border border-t-0 h-max order-first lg:order-last lg:sticky lg:top-16 ">
                    <CourseCta cta_text={data.cta_text} />
                    <CourseChecklist checklist={data.checklist} />
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata({ searchParams }: PageProps) {
    const lang = (await searchParams).lang;
    const data = await getCourseData(lang);

    return {
        title: data.seo.title,
        description: data.seo.description,
        keywords: data.seo.keywords.join(", "),
        openGraph: {
            title: data.seo.title,
            description: data.seo.description,
            images: data.media.filter((m) => m.resource_type === "image").map((m) => m.resource_value),
        },
        other: data.seo.defaultMeta.reduce((acc, meta) => {
            acc[meta.value] = meta.content;
            return acc;
        }, {} as Record<string, string>),
    };
}

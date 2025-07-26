import { CourseData } from "@/types/course";
import React from "react";

interface RenderSectionsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sections: { type: string; component: React.ComponentType<{ section: any }> }[];
    course: CourseData;
}

export default function RenderSections({ sections, course }: RenderSectionsProps) {
    return sections.map(({ type, component }) => {
        const sectionData = course.sections.find((s) => s.type === type);

        if (!sectionData) return null;

        return React.createElement(component, { key: type, section: sectionData });
    });
}

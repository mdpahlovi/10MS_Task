export interface ApiResponse {
    code: number;
    data: CourseData;
    error: [];
    message: string;
    payload: [];
    status_code: number;
}

export interface Media {
    name: string;
    resource_type: "video" | "image";
    resource_value: string;
    thumbnail_url?: string;
}

export interface ChecklistItem {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
}

export interface SeoMeta {
    content: string;
    type: "property" | "name";
    value: string;
}

export interface SeoSchema {
    meta_name: string;
    meta_value: string;
    type: string;
}

export interface Seo {
    defaultMeta: SeoMeta[];
    description: string;
    keywords: string[];
    schema: SeoSchema[];
    title: string;
}

export interface CtaText {
    name: string;
    value: string;
}

export interface OldInfo {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
}

export interface BaseSection {
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
}

export interface BundleItemsSection extends BaseSection {
    type: "bundle_items";
    values: [];
}

export interface OffersSection extends BaseSection {
    type: "offers";
    values: {
        id: string;
        background_color: string;
        background_img: string;
        checklist_text_color: string;
        end_at: string;
        start_at: string;
        template: string;
        text: string;
    }[];
}

export interface InstructorsSection extends BaseSection {
    type: "instructors";
    values: {
        id: string;
        description: string;
        has_instructor_page: boolean;
        image: string;
        name: string;
        short_description: string;
        slug: string;
    }[];
}

export interface FeaturesSection extends BaseSection {
    type: "features";
    values: {
        id: string;
        icon: string;
        subtitle: string;
        title: string;
    }[];
}

export interface GroupJoinEngagementSection extends BaseSection {
    type: "group_join_engagement";
    values: {
        id: string;
        background: { image: string; primary_color: string; secondary_color: string };
        cta: { clicked_url: string; color: string; text: string };
        description: string;
        description_color: string;
        thumbnail: string;
        title: string;
        title_color: string;
        top_left_icon_img: string;
    }[];
}

export interface PointersSection extends BaseSection {
    type: "pointers";
    values: {
        id: string;
        color: string;
        icon: string;
        text: string;
    }[];
}

export interface ContentPreviewSection extends BaseSection {
    type: "content_preview";
    values: [];
}

export interface AboutSection extends BaseSection {
    type: "about";
    values: {
        id: string;
        description: string;
        icon: string;
        title: string;
    }[];
}

export interface FeatureExplanationsSection extends BaseSection {
    type: "feature_explanations";
    values: {
        id: string;
        checklist: string[];
        file_type: "image" | "video";
        file_url: string;
        title: string;
        video_thumbnail: string;
    }[];
}

export interface FreeItemsSection extends BaseSection {
    type: "free_items";
    values: [];
}

export interface CertificateSection extends BaseSection {
    type: "certificate";
    values: [];
}

export interface BundleCertificateSection extends BaseSection {
    type: "bundle_certificate";
    values: [];
}

export interface TestimonialsSection extends BaseSection {
    type: "testimonials";
    values: {
        id: string;
        description: string;
        name: string;
        profile_image: string;
        testimonial: string;
        thumb: string;
        video_type: string;
        video_url: string;
    }[];
}

export interface RequirementsSection extends BaseSection {
    type: "requirements";
    values: [];
}

export interface HowToPaySection extends BaseSection {
    type: "how_to_pay";
    values: [];
}

export interface FaqSection extends BaseSection {
    type: "faq";
    values: {
        id: string;
        answer: string;
        question: string;
    }[];
}

type Section =
    | BundleItemsSection
    | OffersSection
    | InstructorsSection
    | FeaturesSection
    | GroupJoinEngagementSection
    | PointersSection
    | ContentPreviewSection
    | AboutSection
    | FeatureExplanationsSection
    | FreeItemsSection
    | CertificateSection
    | BundleCertificateSection
    | TestimonialsSection
    | RequirementsSection
    | HowToPaySection
    | FaqSection;

export interface CourseData {
    slug: string;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    old_info: OldInfo;
    start_at: string;
    media: Media[];
    checklist: ChecklistItem[];
    seo: Seo;
    cta_text: CtaText;
    sections: Section[];
    is_cohort_based_course: boolean;
    secondary_cta_group: [];
    delivery_method: string;
}

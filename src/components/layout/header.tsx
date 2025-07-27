import { Suspense } from "react";
import LanguageChange from "./language-change";

export default function NavHeader() {
    return (
        <nav className="sticky top-0 bg-white border-b z-10">
            <div className="h-16 container mx-auto px-6 flex items-center justify-between">
                <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LearnHub</h2>
                <Suspense fallback={null}>
                    <LanguageChange />
                </Suspense>
            </div>
        </nav>
    );
}

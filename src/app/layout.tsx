import NavHeader from "@/components/layout/header";
import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const plusJakartaFont = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "IELTS Course",
    description: "IELTS Course by Munzereen Shahid",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${outfitFont.variable} ${plusJakartaFont.variable} antialiased`}>
                <NavHeader />
                {children}
            </body>
        </html>
    );
}

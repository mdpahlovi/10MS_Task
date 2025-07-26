import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/layout/header";

const interFont = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "IELTS Course",
    description: "IELTS Course by Munzereen Shahid",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${interFont.className} antialiased`}>
                <NavHeader />
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ThemeProvider } from "next-themes";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Leon Pham",
    description: "This is a website for Leon Pham.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistMono.variable} antialiased bg-black/5`}>
                <ThemeProvider attribute={"class"}>
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarTrigger />
                        <SidebarInset>
                            <main>{children}</main>
                        </SidebarInset>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

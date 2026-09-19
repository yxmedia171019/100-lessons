import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"100 Lessons — Don't start from zero.",description:"An open archive of real problems, attempts, failures and lessons built by humans and AI."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
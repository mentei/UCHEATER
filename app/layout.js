import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./SessionProvider"; // Import new provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "UCHEATER",
  description: "AI POWERED APP FOR STUDENT ASSESSMENT TO DETECT AI GENERATED CONTENT",
  icons: {
    icon: "/favicon.png", // Path to the favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UBEA",
  description: "UBEA Empowering the Future",
  icons: {
    icon: "/favicon.png", // Main favicon
    shortcut: "/favicon.png", // Shortcut icon
    apple: "/favicon.png", // Apple touch icon (for iOS)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen `}
      >
        <div className="flex flex-col h-screen  ">
      <Header />
      <main className="flex-grow  mt-12 md:mt-16">{children}</main> 
      <Footer /> 
    </div>
      </body>
    </html>
  );
}

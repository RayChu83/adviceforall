import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdviceForAll",
  description:
    "AdviceForAll is dedicated bridging the informative gap by providing a platform for users to share their insights and offer guidance on a wide range of topics from anyone across the globe. Our platform empowers users to both learn from and contribute to a wide variety of topics, covering everything from personal growth to professional development and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-dark text-white`}>
        <Navbar />
        <main className="max-w-[1560px] m-auto p-5 min-h-[90vh]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

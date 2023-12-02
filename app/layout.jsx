import "@/assets/css/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import "boxicons";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quran Application",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
          async
        ></script>
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        <div className="relative scroll-smooth max-w-screen-xl mx-auto min-h-screen pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
// import Header from "@/components/shared/Header";
// import Footer from "@/components/shared/Footer";
import MobileNav from "../components/shared/MobileNav";
import Footer from "../components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apline River Hill web clone",
  description: "This is a clone of the Alpine River Hill website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <Header />
            {/* <MobileNav /> */}
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

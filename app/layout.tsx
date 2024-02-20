import type { Metadata } from "next";
import { Baloo_Bhai_2 } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { url } from "inspector";
const ballo = Baloo_Bhai_2({ subsets: ["latin"] });

function generateMetadata(): Metadata {
  
  return {
    metadataBase: new URL('https://umeraziz.vercel.app/'),
    title: "Umer Aziz | Web Developer & Software Engineer",
    description: "Explore the projects and services of Umer Aziz, a skilled web developer and software engineer based in Mirpur, Azad Kashmir, Pakistan.",
    keywords: "Umer Aziz, web developer, software engineer, Mirpur, Azad Kashmir, Pakistan, web development services, portfolio, projects",
    openGraph: {
      title: "Umer Aziz | Web Developer & Software Engineer",
      description: "Explore the projects and services of Umer Aziz, a skilled web developer and software engineer based in Mirpur, Azad Kashmir, Pakistan.",
      type: "website",
      images: `/pic.jpg`,
    },
    twitter: {
      title: "Umer Aziz | Web Developer & Software Engineer",
      description: "Explore the projects and services of Umer Aziz, a skilled web developer and software engineer based in Mirpur, Azad Kashmir, Pakistan.",
      card: "summary_large_image",
      images: `/pic.jpg`,
    },
  };
}

const metadata: Metadata = generateMetadata();
export { metadata };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ballo.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
    </html>
  );
}

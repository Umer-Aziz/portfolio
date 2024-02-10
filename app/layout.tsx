import type { Metadata } from "next";
import { Baloo_Bhai_2, Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
const ballo = Baloo_Bhai_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umer Aziz - Web Developer",
  description: "Umer Aziz Personal Portfolio Website",
};

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
          </ThemeProvider>
        </body>
    </html>
  );
}

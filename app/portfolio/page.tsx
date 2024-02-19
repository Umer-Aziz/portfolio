import { Metadata } from "next";
import Main from "@/components/portfolio/Main"
export const metadata: Metadata = {
    title: "Portfolio - umer aziz",
    description:"Projects of umer aziz , completed in Next.js ,React.js and Node.js",
  };
  

const page = () => {
    return (
        <>
           <Main/>
        </>
    )
}

export default page
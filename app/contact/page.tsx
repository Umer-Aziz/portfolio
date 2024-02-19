import { Metadata } from "next"
import Main from "@/components/contact/Main"

export const metadata: Metadata = {
    title: "Contact - umer aziz",
    description:"contac detail of umer aziz , web developer",
  };
const page = () => {

    return (
        <>
            <Main/>
        </>
    )
}

export default page
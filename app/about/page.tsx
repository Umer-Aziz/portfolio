import { Metadata } from 'next';
import Main from '@/components/about/Main';
export const metadata: Metadata = {
    title: "About - umer aziz",
    description:"Umer Aziz skills and expereince "
  };
  
const page = () => {
    return (
        <>
            <Main/>
        </>
    )
}

export default page
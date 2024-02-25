import dynamic from "next/dynamic";
import SignUp from "@/components/register";

export const metadata = {
  title: 'SignUp || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

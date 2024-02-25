import dynamic from "next/dynamic";
import Membership from "@/components/membership";

export const metadata = {
  title: 'Membership || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Membership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

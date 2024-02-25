import dynamic from "next/dynamic";
import MyProperties from "@/components/dashboard/my-properties";

export const metadata = {
  title: 'My Classifieds || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <MyProperties />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

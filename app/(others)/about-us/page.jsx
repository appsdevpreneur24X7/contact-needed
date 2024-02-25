import dynamic from "next/dynamic";
import AboutUs from "@/components/about-us";

export const metadata = {
  title: 'About Us || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

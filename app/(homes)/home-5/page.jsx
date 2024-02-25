import dynamic from "next/dynamic";
import HomeMain from "@/components/home-5";

export const metadata = {
  title: 'Home-5 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

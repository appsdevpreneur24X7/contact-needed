import dynamic from "next/dynamic";
import HomeMain from "@/components/home";

export const metadata = {
  title: 'Contact Needed || Free- Classifieds',
  description:
    'Contact Needed - Free- Classifieds',
}

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

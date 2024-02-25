import dynamic from "next/dynamic";
import Faq from "@/components/faq";

export const metadata = {
  title: 'Faq || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

import dynamic from "next/dynamic";
import Compare from "@/components/compare";

export const metadata = {
  title: 'Compare || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Compare />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

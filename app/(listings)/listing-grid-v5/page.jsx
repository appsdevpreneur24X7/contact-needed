import dynamic from "next/dynamic";
import GridV5 from "@/components/listing-grid/grid-v5";

export const metadata = {
  title: 'Simple Listing – Grid V5 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <GridV5 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

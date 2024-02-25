import dynamic from "next/dynamic";
import GridV4 from "@/components/listing-grid/grid-v4";

export const metadata = {
  title: 'Simple Listing – Grid V4 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <GridV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

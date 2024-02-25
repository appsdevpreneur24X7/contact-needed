import dynamic from "next/dynamic";
import GridV1 from "@/components/listing-grid/grid-v1";

export const metadata = {
  title: 'Simple Listing – Grid V1 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <GridV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

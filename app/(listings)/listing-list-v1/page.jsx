import dynamic from "next/dynamic";
import ListV1 from "@/components/listing-list/list-v1";

export const metadata = {
  title: 'Simple Listing – List V1 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

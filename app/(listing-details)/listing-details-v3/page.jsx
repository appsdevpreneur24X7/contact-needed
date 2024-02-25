import dynamic from "next/dynamic";
import ListingDetailsV3 from "@/components/listing-details-v3";

export const metadata = {
  title: 'Listing Single – Details V3 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListingDetailsV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

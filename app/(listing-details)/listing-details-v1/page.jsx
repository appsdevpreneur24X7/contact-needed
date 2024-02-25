import dynamic from "next/dynamic";
import ListingDetailsV1 from "@/components/listing-details-v1";

export const metadata = {
  title: 'Listing Single – Details V1 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListingDetailsV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

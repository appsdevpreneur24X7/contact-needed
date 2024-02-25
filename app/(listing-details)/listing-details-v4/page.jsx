import dynamic from "next/dynamic";
import ListingDetailsV4 from "@/components/listing-details-v4";

export const metadata = {
  title: 'Listing Single – Details V4 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListingDetailsV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

import dynamic from "next/dynamic";
import ListingMapV1 from "@/components/listing-half-map/listing-map-v1";

export const metadata = {
  title: 'Listing - Map V1 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListingMapV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

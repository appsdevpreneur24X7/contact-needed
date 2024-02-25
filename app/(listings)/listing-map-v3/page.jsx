import dynamic from "next/dynamic";
import ListingMapV3 from "@/components/listing-half-map/listing-map-v3";

export const metadata = {
  title: 'Listing - Map V3 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListingMapV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

import dynamic from "next/dynamic";
import ListingMapV2 from "@/components/listing-half-map/listing-map-v2";

export const metadata = {
  title: 'Listing - Map V2 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ListingMapV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

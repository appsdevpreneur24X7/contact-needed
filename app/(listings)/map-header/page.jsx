import dynamic from "next/dynamic";
import MapHeader from "@/components/listing-style/map-header";

export const metadata = {
  title: 'Listing - Map Header || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <MapHeader />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

import dynamic from "next/dynamic";
import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
  title: 'Create Listing || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

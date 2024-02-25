import dynamic from "next/dynamic";
import MySavedSearch from "@/components/dashboard/my-saved-search";

export const metadata = {
  title: 'My Saved Search || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <MySavedSearch />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

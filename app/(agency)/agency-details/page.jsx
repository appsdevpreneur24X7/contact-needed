import dynamic from "next/dynamic";
import AgencyDetails from "@/components/agency-details";

export const metadata = {
  title: 'Agency Details || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <AgencyDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

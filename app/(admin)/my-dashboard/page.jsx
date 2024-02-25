import dynamic from "next/dynamic";
import MyDashboard from "@/components/dashboard/my-dashboard";

export const metadata = {
  title: 'Dashboard || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}


const index = () => {
  return (
    <>
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

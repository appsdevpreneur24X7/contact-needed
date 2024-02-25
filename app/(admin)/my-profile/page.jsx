import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard/my-profile";

export const metadata = {
  title: 'My Profile || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

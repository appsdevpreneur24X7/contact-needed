import dynamic from "next/dynamic";
import MyPackage from "@/components/dashboard/my-package";

export const metadata = {
  title: 'My Package || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <MyPackage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

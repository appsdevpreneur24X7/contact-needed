import dynamic from "next/dynamic";
import MyReview from "@/components/dashboard/my-review";

export const metadata = {
  title: 'My Review || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <MyReview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

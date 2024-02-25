import dynamic from "next/dynamic";
import Terms from "@/components/terms-conditions";

export const metadata = {
  title: 'Terms & Conditions || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

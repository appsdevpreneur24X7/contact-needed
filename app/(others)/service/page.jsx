import dynamic from "next/dynamic";
import Service from "@/components/service";

export const metadata = {
  title: 'Service || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

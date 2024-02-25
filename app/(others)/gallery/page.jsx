import dynamic from "next/dynamic";
import Gallery from "@/components/gallery";

export const metadata = {
  title: 'Gallery || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

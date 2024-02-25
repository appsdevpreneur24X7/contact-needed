import dynamic from "next/dynamic";
import ParallaxStyle from "@/components/listing-style/parallax-style";

export const metadata = {
  title: 'Listing - Parallax Style || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <ParallaxStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

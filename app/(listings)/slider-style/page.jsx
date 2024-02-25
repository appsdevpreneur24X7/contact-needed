import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";

export const metadata = {
  title: 'Listing - Slider Style || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <SliderStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

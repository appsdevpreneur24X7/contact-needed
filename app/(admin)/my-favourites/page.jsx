import dynamic from "next/dynamic";
import MyFavourites from "@/components/dashboard/my-favourites";

export const metadata = {
  title: 'My Favourites || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}


const index = () => {
  return (
    <>
      <MyFavourites />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

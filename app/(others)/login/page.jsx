import dynamic from "next/dynamic";
import Login from "@/components/login";

export const metadata = {
  title: 'Login || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

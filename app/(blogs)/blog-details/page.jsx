import dynamic from "next/dynamic";
import BlogDetails from "@/components/blog-details";

export const metadata = {
  title: 'Blog Details || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <BlogDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

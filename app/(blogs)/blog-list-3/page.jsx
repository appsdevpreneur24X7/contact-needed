import dynamic from "next/dynamic";
import BlogV3 from "@/components/blog-list-3";

export const metadata = {
  title: 'Blog Gid 3 || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <BlogV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

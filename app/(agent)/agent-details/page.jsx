import dynamic from "next/dynamic";
import AgentDetails from "@/components/agent-details";

export const metadata = {
  title: 'Agent Details || Contact Needed - Free Classifieds',
  description:
    'Contact Needed - Free Classifieds',
}

const index = () => {
  return (
    <>
      <AgentDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

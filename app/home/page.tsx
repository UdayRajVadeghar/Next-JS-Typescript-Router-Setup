import Link from "next/link";
import Layout from "../components/Layout";

const page = () => {
  return (
    <Layout>
      <div>This is the home page.</div>
      <Link href="/home/ourhome">
        <h1>Go to our home.</h1>
      </Link>
    </Layout>
  );
};

export default page;

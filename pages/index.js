import Head from "next/head";
import Banner from "../components/banner";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Folk Print</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Banner />
      </Layout>
    </div>
  );
}

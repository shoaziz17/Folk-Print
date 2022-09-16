import Head from "next/head";
import About from "../components/about";
import Banner from "../components/banner";
import Count from "../components/countUp";
import Layout from "../components/Layout";
import Partners from "../components/partners";
import Products from "../components/products";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Folk Print</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://media-exp1.licdn.com/dms/image/C4E0BAQFdY7mN_tGxxg/company-logo_200_200/0/1551919326061?e=2147483647&v=beta&t=QVb5RcXZGdXZk8hDqD9tdUJcBp1w3t7_TOdr0fGkIh0"
        />
      </Head>
      <Layout>
        <Banner />
        <About />
        <Products />
        <Partners />
        <Count />
      </Layout>
    </div>
  );
}

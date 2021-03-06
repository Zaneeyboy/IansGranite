import Head from "next/head";

import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import WorkBreakdown from "../components/WorkBreakdown";
import Layout from "../components/Layout.js";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ian&apos;s Granite and Marble Installations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />

        <Testimonials />
        <WorkBreakdown />
        <CTA />
      </main>
    </Layout>
  );
}

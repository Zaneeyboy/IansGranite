//jshint esversion:6

import Head from "next/head";
import CTA from "../components/CTA";
import Layout from "../components/Layout.js";
import Tile from "../components/Tile";
import styles from "../styles/components/Showroom.module.css";

export default function Showroom() {
  return (
    <Layout>
      <Head>
        <title>Ian&apos;s Granite and Marble Installations Showroom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page_grid}>
        <h2 className={styles.page_title}>Our Material Showroom</h2>
        <p className={styles.lead}>
          At Ian&apos;s Granite, we have a wide variety of granite, marble,
          quartz, natural stone, coral stone, quartzite and engineered stone in
          stock.
        </p>
        <section className={styles.edges}>
          <h2 className={styles.section_title}>Edges</h2>
          <div className={styles.section_grid}>
            <Tile src="/images/grey.jpg" alt="Edge Type" />
            <Tile src="/images/grey.jpg" alt="Edge Type" />
            <Tile src="/images/grey.jpg" alt="Edge Type" />
            <Tile src="/images/grey.jpg" alt="Edge Type" />
            <Tile src="/images/grey.jpg" alt="Edge Type" />
            <Tile src="/images/grey.jpg" alt="Edge Type" />
          </div>
        </section>
        <section className={styles.quartz}>
          <h2 className={styles.section_title}>Quartz Stone</h2>
          <div className={styles.section_grid}>
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
            <Tile src="/images/grey.jpg" alt="Quartz Slab" />
          </div>
        </section>
        <section className={styles.granite}>
          <h2 className={styles.section_title}>Granite</h2>
          <div className={styles.section_grid}>
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
            <Tile src="/images/grey.jpg" alt="Granite Slab" />
          </div>
        </section>
        <section className={styles.marble}>
          <h2 className={styles.section_title}>Marble</h2>
          <div className={styles.section_grid}>
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
            <Tile src="/images/grey.jpg" alt="Marble Slab" />
          </div>
        </section>
        <CTA />
      </main>
    </Layout>
  );
}

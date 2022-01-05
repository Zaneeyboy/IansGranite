//jshint esversion:9

import Head from "next/head";
import Navbar from "./Nav.js";
import Footer from "./Foot.js";

export const siteTitle = "Ian's Granite Installations";

const Layout = ({ children }) => {
  return (
    <body>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Suppliers, Fabricators and Installers of granite, marble, quartz, natural stone, and coral stone in Trinidad and Tobago"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
    </body>
  );
};

export default Layout;

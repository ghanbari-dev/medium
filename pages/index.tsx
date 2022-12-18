import type { NextPage } from "next";
import Head from "next/head";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Trending />

      <Discover />

      <Posts />

      <Footer />
    </div>
  );
};

export default Home;

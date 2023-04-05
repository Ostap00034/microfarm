import Layout from "@/components/layouts/Layout";
import React from "react";

import Head from "next/head";
import Main from "@/components/main/Main";
import Progress from "@/components/main/Progress";
import AboutUs from "@/components/main/AboutUs";
import Advantages from "@/components/main/Advantages";
import Technology from "@/components/main/Technology";
import TrustUs from "@/components/main/TrustUs";
import FeedBack from "@/components/main/FeedBack";
import Footer from "@/components/main/Footer";

const LandingScreen = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MicroFarm</title>
      </Head>
      <Layout>
        <Main />
        <Progress />
        <AboutUs />
        <Advantages />
        <Technology />
        <TrustUs />
        <FeedBack />
        <div></div>
      </Layout>
      <Footer />
    </>
  );
};

export default LandingScreen;

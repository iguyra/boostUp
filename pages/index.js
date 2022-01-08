import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Slides from "../Components/Slides";
import Benefits from "../Components/Benefits";
import Welcome from "../Components/Welcome";
import Why from "../Components/Why";
import Save from "../Components/Save";

import Footer from "../Components/Footer";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="paddingTop">
        <Slides />
        <Save />

        {/* <Why /> */}
        <Benefits />

        <Welcome />
        <Footer />
      </div>
    </Layout>
  );
}

import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/layout/Layout";

export default function ShipmentsToCanada() {
  return (
    <Layout>
      <Head>
        <title>Shipments to Canada</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1>Shipments to Canada</h1>
        <div className="table">hello world</div>
      </main>
    </Layout>
  );
}

import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/layout/Layout";
import { CloudDownload } from "react-bootstrap-icons";

export default function ShipmentsToCanada() {
  return (
    <Layout>
      <Head>
        <title>Shipments to Canada</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <body>
          <h1>Recent Shipments to Canada</h1>
          <div id="wrapper">
            <table>
              <thead>
                <tr>
                  <th>File Number</th>
                  <th>Trans Number</th>
                  <th>Reference</th>
                  <th>Customs Status Date/Time</th>
                  <th>Status</th>
                  <th>
                    <CloudDownload />
                  </th>
                  <th>Port of Entry</th>
                  <th>Carrier</th>
                  <th>Cargo/PARS Number</th>
                  <th>View</th>
                  <th>Client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="File Number">1234</td>
                  <td data-label="Trans Number">77777</td>
                  <td data-label="Reference">234324343</td>
                  <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                  <td data-label="Status">Released</td>
                  <td data-label="<CloudDownload />">Yes</td>
                  <td data-label="Port of Entryl">Archie</td>
                  <td data-label="Carrier">Rainbow Inc.</td>
                  <td data-label="Cargo/PARS Number">BSC2304902349</td>
                  <td data-label="View">Yes</td>
                  <td data-label="Client"> Vancouver City University</td>
                </tr>
                <tr>
                  <td data-label="File Number">1234</td>
                  <td data-label="Trans Number">77777</td>
                  <td data-label="Reference">234324343</td>
                  <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                  <td data-label="Status">Released</td>
                  <td data-label="<CloudDownload />">Yes</td>
                  <td data-label="Port of Entryl">Archie</td>
                  <td data-label="Carrier">Rainbow Inc.</td>
                  <td data-label="Cargo/PARS Number">BSC2304902349</td>
                  <td data-label="View">Yes</td>
                  <td data-label="Client"> Vancouver City University</td>
                </tr>
                <tr>
                  <td data-label="File Number">1234</td>
                  <td data-label="Trans Number">77777</td>
                  <td data-label="Reference">234324343</td>
                  <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                  <td data-label="Status">Released</td>
                  <td data-label="<CloudDownload />">Yes</td>
                  <td data-label="Port of Entryl">Archie</td>
                  <td data-label="Carrier">Rainbow Inc.</td>
                  <td data-label="Cargo/PARS Number">BSC2304902349</td>
                  <td data-label="View">Yes</td>
                  <td data-label="Client"> Vancouver City University</td>
                </tr>
                <tr>
                  <td data-label="File Number">1234</td>
                  <td data-label="Trans Number">77777</td>
                  <td data-label="Reference">234324343</td>
                  <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                  <td data-label="Status">Released</td>
                  <td data-label="<CloudDownload />">Yes</td>
                  <td data-label="Port of Entryl">Archie</td>
                  <td data-label="Carrier">Rainbow Inc.</td>
                  <td data-label="Cargo/PARS Number">BSC2304902349</td>
                  <td data-label="View">Yes</td>
                  <td data-label="Client"> Vancouver City University</td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </main>
    </Layout>
  );
}

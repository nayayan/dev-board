import React from "react";
import Head from "next/head";

import Global from "./_global.js";
import Navigation from "../components/navigation";
import Board from "../components/board";
import styles from "./index.scss";

export default class extends React.Component {
  render() {
    return (
      <Global>
        <Head>
          <title>DEV Board</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        </Head>
        <Board />
        <style jsx>{styles}</style>
      </Global>
    );
  }
}

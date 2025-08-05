"use client"

import styles from "./page.module.css";
import { StillAppLoader } from "@stilljs/apploader";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const stillApp = new StillAppLoader();
    stillApp
      .cdn({ env: { STILL_HOME: '/still-micro-fe/', PATH_PREFIX: 'still-micro-fe/' }, version: '1.3.5'})
      .load();

  });

  return (
    <div className={styles.page}>
      This is regular Next content
      {/** @ts-ignore */}
      <st-element component="CounterComponent"></st-element>
    </div>
  );
}

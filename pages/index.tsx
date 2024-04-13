import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import { useState, useMemo } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
});

const Home: NextPage = () => {
  const getDaysDifference = (startDate: Date, endDate: Date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const diffDays = Math.round(
      Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay),
    );
    return diffDays;
  };

  const days = useMemo(
    () => getDaysDifference(new Date(), new Date("2024-05-11")),
    [],
  );

  const getPercentageOfTripRemaining = (
    daysLeft: number,
    totalDays: number,
  ) => {
    return 100 - Math.round((daysLeft / totalDays) * 100);
  };

  const percentage = getPercentageOfTripRemaining(
    days,
    getDaysDifference(new Date("2024-01-30"), new Date("2024-05-11")),
  );

  return (
    <div className={styles.container}>
      <div className={`${dmSans.className}`}>
        <Head>
          <title>somie is home</title>
          <meta name="description" content="hope this helps" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌻</text></svg>"
          />
        </Head>
        <div className={`flight-component ${dmSans.className}`}>
          <span>manchester</span>
          <input
            type="range"
            className="flight"
            style={
              {
                "--val": percentage,
              } as React.CSSProperties
            }
            value={percentage}
            min={0}
            max={100}
            aria-label="percentage flown"
          />
          <span>bombay</span>
        </div>
        <h1 className="mb-10">{days} days until somie is home</h1>
      </div>
    </div>
  );
};

export default Home;

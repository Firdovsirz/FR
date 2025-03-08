"use client";

import styles from "./page.module.scss";
import Main from "@/components/Main/Main";
import HomePage from "@/pages/Home/HomePage";
import PageBg from "@/components/PageBg/PageBg";

export default function Home() {
  return (
    <>
      <Main />
      <div className={styles.container}>
        <PageBg />
        <HomePage />
      </div>
    </>
  );
}
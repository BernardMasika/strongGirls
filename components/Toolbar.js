import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Opportunities & Events</div>
      <div onClick={() => router.push("/eom")}>About</div>
      <div
      >
        Services
      </div>
    </div>
  );
};

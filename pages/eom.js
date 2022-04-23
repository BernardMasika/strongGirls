import Head from "next/head";
import React from "react";
import { Toolbar } from "../components/Toolbar";
import styles from "../styles/EOM.module.css";

export const eom = () => {
  return (
    <>
      <Head>
        <title>Meet the team</title>
        <meta
          name="description"
          content={`This month's employee of the month is smartgirls`}
        />

        {/*<meta property="og:image" content={employee.image} />*/}
        <meta property="og:title" content="Employee Of The Month" />
        {/*<meta*/}
        {/*  property="og:description"*/}
        {/*  content={`This month's employee of the month is ${employee.name}`}*/}
        {/*/>*/}

        {/*<meta property="twitter:image" content={employee.image} />*/}
        {/*<meta property="twitter:title" content="Employee Of The Month" />*/}
        {/*<meta*/}
        {/*  property="twitter:description"*/}
        {/*  content={`This month's employee of the month is ${employee.name}`}*/}
        {/*/>*/}
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Meet the Team </h1>
          <div className={styles.employeeOfTheMonth}>
            <h3>Kijitonyama Secondary school</h3>
            <p>
              This is a project which is a product of Smartgirls in ICT 2022 <br/>where by we were trying to find solution on how to
              make girls get access to STEM.
            </p>
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             <small style={{marginRight: 5}}>Email:</small><h4 style={{marginRight: 20}}>SmartGirlz@gmail.com</h4>
             <small style={{marginRight: 5}}>Phone:</small><h4>0716736160</h4>
           </div>
            {/*<img src={employee.image} alt="" />*/}
          </div>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async (pageContext) => {
//   const apiResponse = await fetch("https://realtime-news.vercel.app/api");
//   const employee = await apiResponse.json();
//
//   return {
//     props: {
//       employee,
//     },
//   };
// };

export default eom;

import React, {useEffect} from "react";
import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/Toolbar";
import Head from "next/head";

const events = [
  {
    title: 'SmartGirlz in ICT Exhibition and Competition',
    desc: 'This is an Exhibition and competition event where Girls is secondary schools get an opportunity to present ICT related projects',
    date: '23th April 2022'
  },
  {
    title: 'Women and girls in science',
    desc: 'This is the event where girls present different ICT projects and the winning teams are awarded',
    date: '18th May 2022'
  },
  {
    title: 'Girls in ICT hackerthon',
    desc: 'come and gain, network, learn by watching, meet your dream mentor, and an opportunity probably',
    date: '02th June 2022'
  },

]

export const Feed = ({ pageNumber, articles }) => {

  const router = useRouter();
  console.log(articles, pageNumber);
  return (
    <>
      <Head>
        <title>Feed - Realtime Opportunities</title>
        {/*<meta property="og:image" content={articles[0]?.urlToImage} />*/}
        {/*<meta property="og:description" content={articles[0]?.description} />*/}
        {/*<meta property="og:title" content={articles[0]?.title + " and more!"} />*/}
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <div className={styles.post}>
            <h1 >
              {events[0].title}
            </h1>
            <p>{events[0].date}</p>
            <p>{events[0].desc}</p>
            <img src='/exhibition.jpeg' alt="" />
          </div>
          <div className={styles.post}>
            <h1 >
              {events[1].title}
            </h1>
            <p>{events[1].date}</p>
            <p>{events[1].desc}</p>
            <img src='/pitchevent.jpeg' alt="" />
          </div>
          <div className={styles.post}>
            <h1 >
              {events[2].title}
            </h1>
            <p>{events[2].date}</p>
            <p>{events[2].desc}</p>
            <img src='/hackerthon.jpeg' alt="" />
          </div>
        </div>
        <div className={styles.paginator}>
          <div
            // onClick={() => {
            //   if (pageNumber > 1) {
            //     router
            //       .push(`/feed/${pageNumber - 1}`)
            //       .then(() => window.scrollTo(0, 0));
            //   }
            // }}
            // className={pageNumber === 1 ? styles.disabled : styles.active}
          >
            Previous Page
          </div>
          <div>#1</div>
          <div
            // onClick={() => {
            //   if (pageNumber < 5) {
            //     router
            //       .push(`/feed/${pageNumber + 1}`)
            //       .then(() => window.scrollTo(0, 0));
            //   }
            // }}
            // className={pageNumber === 5 ? styles.disabled : styles.active}
          >
            Next Page
          </div>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async (pageContext) => {
//   const pageNumber = pageContext.query.slug;
//   if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
//     return {
//       props: {
//         articles: [],
//         pageNumber: 1,
//       },
//     };
//   }
//   const apiResponse = await fetch(
//     `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
//     {
//       headers: {
//         Authorization: `Bearer 2c69059d37d440a09fff38a2a9577e81`,
//       },
//     }
//   );
//   const apiJson = await apiResponse.json();
//
//   const { articles } = apiJson;
//   return {
//     props: {
//       articles,
//       pageNumber: parseInt(pageNumber),
//     },
//   };
// };

export default Feed;

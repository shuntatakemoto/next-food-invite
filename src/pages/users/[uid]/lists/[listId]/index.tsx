import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';
import createOgp from '../../../../api/ogp';

const ListPage: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const router = useRouter();
  const { uid, listId }: any = router.query;
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:image' key='ogImage' content={`${baseUrl}/ogp/${listId}.png`} />
        <meta name='twitter:card' key='twitterCard' content='summary_large_image' />
        <meta name='twitter:image' key='twitterImage' content={`${baseUrl}/ogp/${listId}.png`} />
      </Head> */}
      <main className='flex flex-col bg-main-color'>
        <List />
        <ListContent />
      </main>
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = [...Array(10)].map((_, index) => ({
//     params: {
//       // uid: `${index}`,
//       listId: `${index}`,
//     },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   [...Array(10)].forEach((_, index) => {
//     void createOgp(index);
//   });

//   return {
//     props: {},
//   };
// };

export default ListPage;

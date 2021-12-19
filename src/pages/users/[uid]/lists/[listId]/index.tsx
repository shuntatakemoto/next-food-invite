import { GetServerSideProps } from 'next';
import React from 'react';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';
import Layout from '../../../../../components/templates/layout';

type Props = {
  listId: string;
};

const ListPage: React.FC<Props> = (props) => {
  const { listId } = props;
  return (
    // <Layout image={`${process.env.NEXT_PUBLIC_BASE_URL}/api/ogp/${listId}`}>
    <Layout
      image={`https://res.cloudinary.com/dhho8x7av/image/upload/l_text:Sawarabi%20Gothic_50_bold:${listId},co_rgb:333,w_800,c_fit/v1639747883/ogp_v2pkyb.png`}
    >
      <main className='flex flex-col bg-main-color'>
        <List />
        <ListContent />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { listId } = context.query;
  console.log('getServerSideProps-test', listId);
  return {
    props: { listId },
  };
};

export default ListPage;

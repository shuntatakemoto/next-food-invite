import { GetServerSideProps } from 'next';
import React from 'react';
import Layout from '../../../../../components/templates/layout';
import { db } from '../../../../../libs/firebase';
import { Params } from '../../../../../types/params';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';

type Props = {
  listName: string;
};

const ListPage: React.FC<Props> = (props) => {
  const { listName } = props;

  return (
    <Layout
      image={`https://res.cloudinary.com/dhho8x7av/image/upload/l_text:Sawarabi%20Gothic_50_bold:${listName},co_rgb:333,w_800,c_fit/v1639747883/ogp_v2pkyb.png`}
    >
      <main className='flex flex-col bg-main-color'>
        <ListHeader />
        <ListContent />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid, listId } = context.query as Params;
  let listName = '';
  const docRef = db.collection('users').doc(uid).collection('lists').doc(listId);
  await docRef.get().then((doc) => {
    if (doc.exists) {
      const docData = doc.data();
      listName = docData!['listname'];
    }
  });

  return {
    props: { listName },
  };
};

export default ListPage;

import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import Layout from '../../../../../components/templates/layout';
import { useModal } from '../../../../../hooks/useModal';
import { db } from '../../../../../libs/firebase';
import { Params } from '../../../../../types/params';
import { ListContent } from './ListContent';
import { useList } from './useList';
import { useListContent } from './useListContent';

type Props = {
  listName: string;
};

const ListHeader = dynamic(() => import('./ListHeader'), {
  ssr: false,
});

const ListPage: React.FC<Props> = (props) => {
  const { listName } = props;
  const { user, post, addLink, DmLink, bookmark, deleteList, shareUrl, openMobileShare } =
    useList();
  const { posts } = useListContent();

  const { isOpen, open, close } = useModal();

  return (
    <Layout
      image={`https://res.cloudinary.com/dhho8x7av/image/upload/l_text:Sawarabi%20Gothic_50_bold:${listName},co_rgb:333,w_800,c_fit/v1639747883/ogp_v2pkyb.png`}
    >
      <main className='flex flex-col bg-main-color md:px-24 xl:px-60'>
        <ListHeader
          user={user}
          post={post}
          addLink={addLink}
          openModal={open}
          modalIsOpen={isOpen}
          closeModal={close}
          DmLink={DmLink}
          bookmark={bookmark}
          deleteList={deleteList}
          shareUrl={shareUrl}
          openMobileShare={openMobileShare}
        />
        <ListContent posts={posts} />
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
      listName = docData?.['listname'];
    }
  });

  return {
    props: { listName },
  };
};

export default ListPage;

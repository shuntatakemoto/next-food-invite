import { useRouter } from 'next/dist/client/router';
import React, { useState, useEffect } from 'react';
import { Headline } from '../../../../../components/atoms/Headline';
import { db } from '../../../../../libs/firebase';
import { Params } from '../../../../../types/params';
import ListContentCard from './ListContentCard';

export const ListContent: React.FC = () => {
  const router = useRouter();
  const { uid, listId } = router.query as Params;
  const [posts, setPosts] = useState([
    {
      restaurantId: '',
      username: '',
      timestamp: undefined,
      imageurl: '',
      memo: '',
      url: '',
      name: '',
    },
  ]);

  useEffect(() => {
    if (uid && listId) {
      const unSub = db
        .collection('users')
        .doc(uid)
        .collection('lists')
        .doc(listId)
        .collection('restaurant')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot: { docs: any[] }) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              restaurantId: doc.id,
              username: doc.data().username,
              timestamp: doc.data().timestamp,
              imageurl: doc.data().imageurl,
              memo: doc.data().memo,
              url: doc.data().url,
              name: doc.data().name,
            })),
          ),
        );
      return () => {
        unSub();
      };
    }
  }, [listId, uid]);

  return (
    <div>
      {posts[0]?.name ? (
        <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
          {posts.map((post) => (
            <ListContentCard
              key={post.name}
              restaurantId={post.restaurantId}
              timestamp={post.timestamp}
              username={post.username}
              imageurl={post.imageurl}
              memo={post.memo}
              url={post.url}
              name={post.name}
            />
          ))}
        </div>
      ) : (
        <div className='py-12'>
          <Headline headline='まだお店がありません' size='small' />
        </div>
      )}
    </div>
  );
};

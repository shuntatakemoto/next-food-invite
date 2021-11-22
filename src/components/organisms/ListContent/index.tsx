import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { db } from '../../../libs/firebase';
import ListContentCard from '../../molecules/ListContentCard';

export const ListContent: React.FC = () => {
  const router = useRouter();
  const { uid, listId }: any = router.query;
  const [posts, setPosts] = useState([
    {
      restaurantId: '',
      username: '',
      timestamp: null,
      imageurl: '',
      memo: '',
      url: '',
      name: '',
    },
  ]);

  useEffect(() => {
    if (uid && listId) {
      const unSub = db
        .collection(uid)
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
  }, [uid]);

  return (
    <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
      {posts[0]?.name && (
        <>
          {posts.map((post: any) => (
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
        </>
      )}
    </div>
  );
};

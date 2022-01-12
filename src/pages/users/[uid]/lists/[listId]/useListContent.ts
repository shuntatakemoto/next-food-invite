import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { db } from '@/libs/firebase';
import { Params } from '@/types/params';

export const useListContent = () => {
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
  return {
    posts,
  };
};

import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { db } from '../libs/firebase';

export const useFullList = () => {
  const router = useRouter();
  const { uid }: any = router.query;
  const [posts, setPosts] = useState([
    {
      id: '',
      listname: '',
      username: '',
      timestamp: null,
      emojiname: '',
    },
  ]);

  useEffect(() => {
    if (uid) {
      const unSub = db
        .collection('users')
        .doc(uid)
        .collection('lists')
        // .where('userid', '==', uid)
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot: { docs: any[] }) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              listname: doc.data().listname,
              timestamp: doc.data().timestamp,
              username: doc.data().username,
              emojiname: doc.data().emojiname,
            })),
          ),
        );
      return () => {
        unSub();
      };
    }
  }, [uid]);

  return {
    uid,
    posts,
  };
};

import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { db } from '../libs/firebase';
import { Lists } from '../types/lists';
import { Params } from '../types/params';

export const useFullList = () => {
  const router = useRouter();
  const { uid } = router.query as Params;
  const [posts, setPosts] = useState<Lists>([
    {
      avatar: '',
      id: '',
      listname: '',
      username: '',
      timestamp: undefined,
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
              avatar: doc.data().avatar,
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

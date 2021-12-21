import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { db } from '../libs/firebase';
import { Params } from '../types/params';

export const useBookmarkList = () => {
  const router = useRouter();
  const { uid } = router.query as Params;
  const [posts, setPosts] = useState([
    {
      avatar: '',
      id: '',
      listname: '',
      listid: '',
      username: '',
      timestamp: undefined,
      emojiname: '',
      listurl: '',
    },
  ]);

  useEffect(() => {
    if (uid) {
      const unSub = db
        .collection('users')
        .doc(uid)
        .collection('bookmark')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot: { docs: any[] }) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              avatar: doc.avatar,
              listname: doc.data().listname,
              listid: doc.data().listid,
              timestamp: doc.data().timestamp,
              username: doc.data().username,
              emojiname: doc.data().emojiname,
              listurl: doc.data().listurl,
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

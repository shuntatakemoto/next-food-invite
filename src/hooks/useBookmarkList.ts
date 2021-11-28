import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { db } from '../libs/firebase';

export const useBookmarkList = () => {
  const router = useRouter();
  const { uid }: any = router.query;
  const [posts, setPosts] = useState([
    {
      avatar: '',
      id: '',
      listname: '',
      listid: '',
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
            })),
          ),
        );
      return () => {
        unSub();
      };
    }
  }, [uid]);

  return {
    posts,
  };
};

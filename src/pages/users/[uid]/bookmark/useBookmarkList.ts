import firebase from 'firebase/app';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { db } from '@/libs/firebase';
import { Params } from '@/types/params';

export const useBookmarkList = () => {
  const router = useRouter();
  const { uid } = router.query as Params;
  const isBookmarkPage = router.pathname.includes('bookmark') ? true : false;
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
        .onSnapshot((snapshot: { docs: firebase.firestore.DocumentData[] }) =>
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
    isBookmarkPage,
    posts,
  };
};

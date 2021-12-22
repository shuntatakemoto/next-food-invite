import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { db } from '../libs/firebase';
import { Params } from '../types/params';

export const useUser = () => {
  const router = useRouter();
  const { uid } = router.query as Params;
  const [userInfo, setUserInfo] = useState({
    avatar: '',
    id: '',
    username: '',
    timestamp: undefined,
    userid: '',
    twitterid: '',
  });

  useEffect(() => {
    if (uid) {
      const docRef = db.collection('users').doc(uid);
      docRef.get().then((doc: any) => {
        if (doc.exists) {
          setUserInfo(doc.data());
        }
      });
    }
  }, [uid]);

  return {
    userInfo,
  };
};

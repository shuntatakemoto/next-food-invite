import firebase from 'firebase/app';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from './firebase';
import { useJudgeLogin } from '@/hooks/useJudgeLogin';
import { login, logout, selectUser } from '@/store/user';
import { Params } from '@/types/params';

export const Auth = ({ children }: any) => {
  const user = useSelector(selectUser);
  const [isFirst, setIsFirst] = useState<boolean | null>(null);
  const router = useRouter();
  const { uid } = router.query as Params;
  useJudgeLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
            twitterUid: authUser.providerData[0]?.uid,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);

  useLayoutEffect(() => {
    const docRef = db.collection('users').doc(uid);
    docRef.get().then((doc: any) => {
      if (doc.exists) {
        setIsFirst(false);
      }
      if (!doc.exists) {
        setIsFirst(true);
      }
    });
  }, [user.uid]);

  useEffect(() => {
    if (user.uid && isFirst) {
      db.collection('users').doc(user.uid).set({
        avatar: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: '',
        userid: '',
        twitterid: '',
      });
    }
    if (user.uid && isFirst) {
      db.collection('users').doc(user.uid).update({
        avatar: user.photoUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        userid: user.uid,
        twitterid: user.twitterUid,
      });
    }
  }, [user.uid]);

  return children;
};

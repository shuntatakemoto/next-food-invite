import firebase from 'firebase/app';
import { useRouter } from 'next/dist/client/router';
import { useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from './firebase';
import { useJudgeLogin } from '@/hooks/useJudgeLogin';
import { login, logout, selectUser } from '@/store/user';
import { Params } from '@/types/params';

type Props = {
  children: ReactNode;
};

export const Auth = ({ children }: Props) => {
  const user = useSelector(selectUser);
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

  useEffect(() => {
    const docRef = db.collection('users').doc(uid);
    docRef.get().then((doc: any) => {
      if (user.uid) {
        if (!doc.exists) {
          db.collection('users').doc(user.uid).set({
            avatar: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: '',
            userid: '',
            twitterid: '',
          });
        } else {
          db.collection('users').doc(user.uid).update({
            avatar: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName,
            userid: user.uid,
            twitterid: user.twitterUid,
          });
        }
      }
    });
  }, []);

  return children;
};

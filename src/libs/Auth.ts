import firebase from 'firebase/app';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from './firebase';
import { useJudgeLogin } from '@/hooks/useJudgeLogin';
import { login, logout, selectUser } from '@/store/user';

export const Auth = ({ children }: any) => {
  const user = useSelector(selectUser);

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
    if (user.uid) {
      db.collection('users').doc(user.uid).set({
        avatar: user.photoUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        userid: user.uid,
        twitterid: user.twitterUid,
      });
    }
  }, [user.displayName, user.photoUrl, user.twitterUid, user.uid]);

  return children;
};

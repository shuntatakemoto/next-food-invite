import firebase from 'firebase/app';
import router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useJudgeLogin } from '../hooks/useJudgeLogin';
import { login, logout, selectUser } from '../store/user';
import { Params } from '../types/params';
import { auth, db } from './firebase';

export const Auth = ({ children }: any) => {
  const user = useSelector(selectUser);
  console.log(user);

  useJudgeLogin();

  //   useEffect(() => {
  //     if (router.pathname.match('/users(/S)?')) {
  //       if (!user.uid /*reduxのStateがfalseならば */) {
  //         Router.push('/'); // signinページに飛ばす
  //       }
  //     }
  //   }, [router.pathname]);

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
    const { uid } = router.query as Params;
    if (user.uid) {
      db.collection('users').doc(uid).set({
        avatar: user.photoUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        userid: user.uid,
        twitterid: user.twitterUid,
      });
    }
  }, []);

  return children;
};

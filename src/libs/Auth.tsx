import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from './firebase';
import Router from 'next/router';

import { selectUser } from '../store/user/index';

import { login, logout } from '../store/user';

export const Auth = ({ children }: any) => {
  const router = useRouter();
  const user = useSelector(selectUser);
  console.log(user);

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

  return children;
};

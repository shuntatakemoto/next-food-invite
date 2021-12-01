import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { selectUser } from '../store/user/index';
import { login, logout } from '../store/user';
import { useJudgeLogin } from '../hooks/useJudgeLogin';

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

  return children;
};

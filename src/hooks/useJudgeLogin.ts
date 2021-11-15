import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectUser } from '../store/user/index';

export const useJudgeLogin = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    const { uid, postId } = router.query;
    console.log('uid-test', uid, 'postId-test', postId);

    if (user.uid && ((uid || postId) == '' || (uid || postId) == undefined)) {
      console.log('uid-test2', uid, 'postId-test2', postId);
      router.replace(`/users/${user.uid}`);
    }

    //ログインしてない時はログインページに遷移させる
    // if (!user.uid) {
    //   console.log("user.uid == '')");
    //   router.replace('/');
    // }
  }, [user.uid]);
};

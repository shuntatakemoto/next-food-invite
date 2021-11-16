import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectUser } from '../store/user/index';

export const useJudgeLogin = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    const { uid, listId } = router.query;
    console.log('uid-test', uid, 'listId-test', listId);

    if (user.uid && ((uid || listId) == '' || (uid || listId) == undefined)) {
      console.log('uid-test2', uid, 'listId-test2', listId);
      router.replace(`/users/${user.uid}`);
    }

    //ログインしてない時はログインページに遷移させる
    // if (!user.uid) {
    //   console.log("user.uid == '')");
    //   router.replace('/');
    // }
  }, [user.uid]);
};

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/index';

export const useJudgeLogin = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    const { uid, listId } = router.query;

    if (user.uid && ((uid || listId) == '' || (uid || listId) == undefined)) {
      router.replace(`/users/${user.uid}`);
    }

    //ログインしてない時はログインページに遷移させる
    // if (!user.uid) {
    //   console.log("user.uid == '')");
    //   router.replace('/');
    // }
  }, [user.uid]);
};

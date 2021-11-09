import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectUser } from '../store/user/index';

export const useJudgeLogin = () => {
  console.log('呼ばれたよ−１');
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user.uid) {
      console.log('呼ばれたよ−２');
      router.replace(`/users/${user.uid}`);
    }
  }, [user.uid]);

  useEffect(() => {
    console.log('呼ばれたよ−３');
    if (user.uid == undefined) {
      console.log('呼ばれたよ−４');
      router.replace('/');
    }
    if (user.uid == '') {
      console.log('呼ばれたよ−４');
      router.replace('/');
    }
  }, [user.uid]);
};

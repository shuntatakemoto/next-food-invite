import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectUser } from '../store/user/index';

export function judgeLogin() {
  const user = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (user.uid) {
      router.replace('/users/mypage');
    }
  }, [user]);

  useEffect(() => {
    if (user.uid === undefined || false) {
      router.replace('/index');
    }
  }, [user]);
}

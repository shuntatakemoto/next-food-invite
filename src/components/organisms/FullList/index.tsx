import React, { useState, useEffect } from 'react';
import { db } from '../../../libs/firebase';
import FullPost from '../../molecules/FullPost';
import { useRouter } from 'next/router';

const FullList: React.FC = () => {
  const router = useRouter();
  const { uid }: any = router.query;
  const [posts, setPosts] = useState([
    {
      id: '',
      listname: '',
      username: '',
      timestamp: null,
      emojiname: '',
    },
  ]);

  useEffect(() => {
    if (uid) {
      const unSub = db
        .collection(uid)
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot: { docs: any[] }) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              avatar: doc.data().avatar,
              listname: doc.data().listname,
              timestamp: doc.data().timestamp,
              username: doc.data().username,
              emojiname: doc.data().emojiname,
            })),
          ),
        );
      return () => {
        unSub();
      };
    }
  }, [uid]);

  return (
    <div>
      <p className='text-center text-2xl py-5 font-bold'>マイリスト</p>
      <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
        {posts[0]?.id && (
          <>
            {posts.map((post) => (
              <FullPost
                key={post.id}
                postId={post.id}
                // avatar={post.avatar}
                listname={post.listname}
                timestamp={post.timestamp}
                username={post.username}
                emojiname={post.emojiname}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FullList;

import React from 'react';
import FullPost from '../../molecules/FullPost';
import { useFullList } from '../../../hooks/useFullList';

// type PostsProps = {
//   id: string;
//   listname: string;
//   username: string;
//   timestamp: any;
//   emojiname: string;
// };

const FullList: React.FC = () => {
  const { posts } = useFullList();

  return (
    <div>
      <p className='text-center text-2xl py-5 font-bold'>マイリスト</p>
      <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
        {posts[0]?.id && (
          <>
            {posts.map((post: any) => (
              <FullPost
                key={post.id}
                listId={post.id}
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

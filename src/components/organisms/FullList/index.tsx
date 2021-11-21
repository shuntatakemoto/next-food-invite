import React from 'react';
import FullPost from '../../molecules/FullPost';
import { useFullList } from '../../../hooks/useFullList';
import { Headline } from '../../atoms/Headline';

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
      <div className='py-5'>
        <Headline headline='マイリスト' />
      </div>

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

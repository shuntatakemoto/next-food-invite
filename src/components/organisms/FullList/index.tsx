import React from 'react';
import { useFullList } from '../../../hooks/useFullList';
import { Headline } from '../../atoms/Headline';
import FullPost from '../../molecules/FullPost';

const FullList: React.FC = () => {
  const { uid, posts } = useFullList();

  return (
    <div>
      <div className='py-5'>
        <Headline headline='マイリスト' />
      </div>

      <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
        {posts[0]?.id && (
          <>
            {posts.map((post) => (
              <FullPost
                key={post.id}
                uid={uid}
                listId={post.id}
                listname={post.listname}
                timestamp={post.timestamp}
                username={post.username}
                emojiname={post.emojiname}
                isBookmarkPage={false}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FullList;

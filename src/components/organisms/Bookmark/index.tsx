import React from 'react';
import { useBookmarkList } from '../../../hooks/useBookmarkList';
import FullPost from '../../molecules/FullPost';

export const Bookmark: React.FC = () => {
  const { uid, posts } = useBookmarkList();

  return (
    <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
      {posts[0]?.id && (
        <>
          {posts.map((post) => (
            <FullPost
              key={post.id}
              id={post.id}
              uid={uid}
              listId={post.listid}
              listname={post.listname}
              timestamp={post.timestamp}
              username={post.username}
              emojiname={post.emojiname}
            />
          ))}
        </>
      )}
    </div>
  );
};

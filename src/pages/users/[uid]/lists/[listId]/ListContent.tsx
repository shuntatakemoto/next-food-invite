import React from 'react';
import { Headline } from '../../../../../components/atoms/Headline';
import ListContentCard from './ListContentCard';
import { useListContent } from './useListContent';

export const ListContent: React.FC = () => {
  const { posts } = useListContent();

  return (
    <div>
      {posts[0]?.name ? (
        <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
          {posts.map((post) => (
            <ListContentCard
              key={post.name}
              restaurantId={post.restaurantId}
              timestamp={post.timestamp}
              username={post.username}
              imageurl={post.imageurl}
              memo={post.memo}
              url={post.url}
              name={post.name}
            />
          ))}
        </div>
      ) : (
        <div className='py-12'>
          <Headline headline='まだお店がありません' size='small' />
        </div>
      )}
    </div>
  );
};

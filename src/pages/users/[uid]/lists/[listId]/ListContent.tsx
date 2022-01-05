import React from 'react';
import { Headline } from '../../../../../components/atoms/Headline';
import ListContentCard from './ListContentCard';

type ListContentProps = {
  posts: {
    restaurantId: string;
    username: string;
    timestamp: undefined;
    imageurl: string;
    memo: string;
    url: string;
    name: string;
  }[];
};

export const ListContent: React.FC<ListContentProps> = (props) => {
  return (
    <div>
      {props.posts[0]?.name ? (
        <div className='grid grid-cols-2 text-center xl:grid-cols-3'>
          {props.posts.map((post) => (
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

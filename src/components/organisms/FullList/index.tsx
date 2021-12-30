import React from 'react';
import { Lists } from '../../../types/lists';
import { Headline } from '../../atoms/Headline';
import FullPost from '../../molecules/FullPost';

export type FullListProps = {
  posts: Lists;
  uid: string;
};

const FullList: React.FC<FullListProps> = (props) => {
  return (
    <div>
      <div className='py-4'>
        <Headline headline='マイリスト' />
      </div>
      {props.posts[0]?.id ? (
        <div className='grid grid-cols-2 xl:grid-cols-4 text-center'>
          {props.posts.map((post) => (
            <FullPost
              key={post.id}
              uid={props.uid}
              listId={post.id}
              listname={post.listname}
              timestamp={post.timestamp}
              username={post.username}
              emojiname={post.emojiname}
              isBookmarkPage={false}
            />
          ))}
        </div>
      ) : (
        <div className='py-12'>
          <Headline headline='まだリストがありません' size='small' />
        </div>
      )}
    </div>
  );
};

export default FullList;

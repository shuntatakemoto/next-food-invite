import React from 'react';
import { Lists } from '../../../types/lists';
import { Button } from '../../atoms/Button';
import { Headline } from '../../atoms/Headline';
import FullPost from '../../molecules/FullPost';

export type FullListProps = {
  posts: Lists;
  uid: string;
  addList?: () => void;
};

const FullList: React.FC<FullListProps> = (props) => {
  return (
    <div>
      <div className='py-8'>
        <Headline headline='マイリスト' />
      </div>
      {props.posts[0]?.id ? (
        <div className='grid grid-cols-2 text-center xl:grid-cols-3'>
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
        <div className='py-8'>
          <Headline headline='まだリストがありません' size='small' />
          <div className='pt-4 text-center'>
            <Button label='リストを追加する' onClick={props.addList} size='small' />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullList;

import { Emoji } from 'emoji-mart';
import firebase from 'firebase/app';
import Link from 'next/link';
import React from 'react';

export type FullPostProps = {
  uid: string;
  listId: string;
  listname: string;
  username: string;
  timestamp?: firebase.firestore.FieldValue;
  emojiname: string;
};

const FullPost: React.FC<FullPostProps> = (props) => {
  const emojiName = props.emojiname;

  return (
    <div className=' rounded-lg shadow-xl overflow-hidden h-48 xl:h-60 m-4 xl:m-6'>
      <Link href={`/users/${props.uid}/lists/${props.listId}`}>
        <div>
          <div className='h-36 xl:h-48 grid justify-items-center items-center bg-gray-200'>
            <Emoji emoji={emojiName} size={64} set='twitter' />
          </div>
          <div className='text-center h-12 xl:h-12 grid justify-items-center items-center bg-gray-200'>
            <p className='text-base'>{props.listname}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default FullPost;

import React from 'react';
import Link from 'next/link';
import { Emoji } from 'emoji-mart';
import { useRouter } from 'next/router';

type FullPostProps = {
  listId: string;
  listname: string;
  username: string;
  timestamp: any;
  emojiname: string;
};

const WholePost: React.FC<FullPostProps> = (props) => {
  const router = useRouter();
  const { uid }: any = router.query;
  const emojiName = props.emojiname;
  //ダブルクオテーションを削除している
  const newEmojiName = emojiName.replace(/\"/g, '');

  return (
    <div className=' rounded-lg shadow-xl overflow-hidden h-48 xl:h-60 m-4 xl:m-6'>
      <Link href={`/users/${uid}/lists/${props.listId}`}>
        <div>
          <div className='h-36 xl:h-48 grid justify-items-center items-center bg-gray-200'>
            <Emoji emoji={newEmojiName} size={64} set='twitter' />
          </div>
          <div className='text-center h-12 xl:h-12 grid justify-items-center items-center bg-gray-200'>
            <p className='text-base'>{props.listname}</p>
            <p className='text-base'>{props.listId}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WholePost;

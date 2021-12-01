import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';

type ListContentCardProps = {
  restaurantId: string;
  username: string;
  timestamp?: firebase.firestore.FieldValue;
  imageurl: string;
  memo?: string;
  url?: string;
  name: string;
};

const ListContentCard: React.FC<ListContentCardProps> = (props) => {
  const router = useRouter();
  const { uid, listId } = router.query;

  return (
    <div className=' rounded-lg shadow-xl overflow-hidden h-48 xl:h-60 m-4 xl:m-6'>
      <Link href={`/users/${uid}/lists/${listId}/restaurant/${props.restaurantId}`}>
        <div>
          <div className='h-36 xl:h-48 grid justify-items-center items-center bg-gray-200'>
            <img src={props.imageurl} alt='' className='h-36 xl:h-48 w-full object-cover' />
          </div>
          <div className='text-center h-12 xl:h-12 grid justify-items-center items-center bg-gray-200'>
            <p className='text-base'>{props.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListContentCard;

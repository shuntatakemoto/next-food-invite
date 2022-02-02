import firebase from 'firebase/app';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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
    <div className='overflow-hidden m-4 rounded-lg md:m-6'>
      <Link href={`/users/${uid}/lists/${listId}/restaurant/${props.restaurantId}`} passHref>
        <div>
          <div className='grid justify-items-center items-center w-full bg-sub-color'>
            <Image
              src={props.imageurl}
              alt='food-image'
              width={560}
              height={560}
              objectFit={'cover'}
            />
          </div>
          <div className='grid justify-items-center items-center py-2 text-center bg-gray-200 xl:py-4'>
            <p className='text-base'>{props.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListContentCard;

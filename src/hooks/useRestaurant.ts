import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user';
import { db } from '../libs/firebase';
import { useRouter } from 'next/router';

export const useRestaurant = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState<any>('');
  const router = useRouter();
  const { uid, listId, restaurantId }: any = router.query;

  useEffect(() => {
    if (uid && listId && restaurantId) {
      db.collection(uid)
        .doc(listId)
        .collection('restaurant')
        .doc(restaurantId)
        .get()
        .then((doc) => setPosts(doc.data()));
    }
  }, [user]);

  const RestaurantLink = () => {
    router.replace(posts.url);
  };

  const deleteItem = () => {
    db.collection(uid)
      .doc(listId)
      .collection('restaurant')
      .doc(restaurantId)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
    router.replace(`/users/${uid}/lists/${listId}`);
  };
  return {
    user,
    posts,
    RestaurantLink,
    deleteItem,
  };
};

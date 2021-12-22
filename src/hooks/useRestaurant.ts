import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../libs/firebase';
import { selectUser } from '../store/user';
import { Params } from '../types/params';

export const useRestaurant = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState<firebase.firestore.DocumentData | undefined>(undefined);
  const router = useRouter();
  const { uid, listId, restaurantId } = router.query as Params;

  useEffect(() => {
    if (uid && listId && restaurantId) {
      db.collection('users')
        .doc(uid)
        .collection('lists')
        .doc(listId)
        .collection('restaurant')
        .doc(restaurantId)
        .get()
        .then((doc) => setPosts(doc.data()));
    }
  }, [user]);

  const RestaurantLink = () => {
    router.replace(posts?.url);
  };

  const deleteItem = () => {
    db.collection('users')
      .doc(uid)
      .collection('lists')
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

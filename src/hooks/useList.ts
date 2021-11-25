import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user';
import { useRouter } from 'next/router';
import { db } from '../libs/firebase';
import firebase from 'firebase/app';

type ListsProps = {
  userid: string;
  avatar?: string;
  listname: string;
  username: string;
  timestamp: firebase.firestore.FieldValue;
  emojiname?: string;
  twitterid?: string;
};

export const useList = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { uid, listId }: any = router.query;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [post, setPost] = useState<ListsProps>({
    userid: '',
    avatar: '',
    listname: '',
    username: '',
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    emojiname: '',
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (uid && listId) {
      db.collection(uid)
        .doc(listId)
        .get()
        .then((doc: any) => setPost(doc.data()));
    }
  }, [uid]);

  const deleteList = () => {
    db.collection(uid)
      .doc(listId)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error: any) => {
        console.error('Error removing document: ', error);
      });
    router.replace('/');
  };

  const addLink = () => {
    router.replace(`/users/${uid}/lists/${listId}/add-list`);
  };

  const DmLink = () => {
    router.replace(
      'https://twitter.com/messages/compose?recipient_id=' +
        post.twitterid +
        '&text=(店名を入力)に一緒に行きたいです for Food Invite\n ' +
        'https://food-invite.vercel.app' +
        router.asPath,
    );
  };

  const shareUrl = `https://food-invite.vercel.app${router.asPath}`;

  return {
    user,
    post,
    openModal,
    afterOpenModal,
    closeModal,
    modalIsOpen,
    deleteList,
    addLink,
    DmLink,
    shareUrl,
  };
};

import React, { useState, useEffect } from 'react';
// import MyList from "../organisms/MyList";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user';
import { Emoji } from 'emoji-mart';
import { Button } from '../../atoms/Button';
import { db } from '../../../libs/firebase';
// import Modal from '../organisms/Modal';
import { useRouter } from 'next/router';
import { SubProfile } from '../../molecules/SubProfile';

export const List: React.FC = (props) => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { uid, listId }: any = router.query;

  // const [post, setPost] = useState([
  //   {
  //     userid: "",
  //     avatar: "",
  //     listname: "",
  //     username: "",
  //     timestamp: null,
  //     emojiname: "",
  //   },
  // ]);

  const [post, setPost] = useState<any>('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (uid && listId) {
      db.collection(uid)
        .doc(listId)
        .get()
        .then((doc) => setPost(doc.data()));
    }
  }, [uid]);

  const deleteList = () => {
    db.collection(uid)
      .doc(listId)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
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
        router.pathname,
    );
  };

  return (
    <div className='pt-5 '>
      <SubProfile avatar={post.avatar} username={post.username} />
      <div className='mb-6'>
        <div className='text-center py-10'>
          {post.emojiname && <Emoji emoji={post.emojiname} size={64} set='twitter' />}
        </div>
        <h3 className='text-3xl text-center mb-5 '>{post.listname}</h3>

        <div className='text-center '>
          <div>{user.uid && <Button label='追加する' onClick={addLink} />}</div>
          <div>{user.uid && <Button label='シェアする' onClick={() => setShow(true)} />}</div>
          <div>
            <Button label='一緒に行きたい' onClick={DmLink} />
          </div>
        </div>
      </div>
      {/* <Modal show={show} setShow={setShow} content={post.listname} /> */}
      {/* <MyList /> */}
      <div className='text-center mb-6'>
        {user.uid && <Button onClick={deleteList} label='このリストを削除する' primary={true} />}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user';
import { Emoji } from 'emoji-mart';
import { Button } from '../../atoms/Button';
import { db } from '../../../libs/firebase';
import { useRouter } from 'next/router';
import { SubProfile } from '../../molecules/SubProfile';
import Modal from 'react-modal';
import { Share } from '../../molecules/Share';
import { useList } from '../../../hooks/useList';

Modal.setAppElement('#__next');

export const List: React.FC = () => {
  const {
    user,
    post,
    addLink,
    openModal,
    modalIsOpen,
    afterOpenModal,
    closeModal,
    DmLink,
    deleteList,
    shareUrl,
  } = useList();

  return (
    <div className='pt-5 '>
      <SubProfile avatar={post.avatar} username={post.username} />
      <div className='mb-6'>
        <div className='text-center py-10'>
          {post.emojiname && <Emoji emoji={post.emojiname} size={64} set='twitter' />}
        </div>
        <h3 className='text-3xl text-center mb-5 '>{post.listname}</h3>

        <div className='text-center '>
          <div className='mb-2'>{user.uid && <Button label='追加する' onClick={addLink} />}</div>
          <div className='mb-2'>
            {user.uid && <Button label='シェアする' onClick={openModal} />}
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                },
                content: {
                  position: 'absolute',
                  top: '35%',
                  left: '40px',
                  right: '40px',
                  bottom: '40%',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                },
              }}
            >
              <Share text={`${post.listname}\n`} url={shareUrl} onClick={closeModal} />
            </Modal>
          </div>
          <div className='mb-2'>
            <Button label='一緒に行きたい' onClick={DmLink} />
          </div>
          <div className=' mb-4'>
            {user.uid && (
              <Button onClick={deleteList} label='このリストを削除する' primary={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

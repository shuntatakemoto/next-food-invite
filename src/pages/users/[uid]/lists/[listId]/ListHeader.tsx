import { Emoji } from 'emoji-mart';
import React from 'react';
import Modal from 'react-modal';
import { Button } from '../../../../../components/atoms/Button';
import { Headline } from '../../../../../components/atoms/Headline';
import { Share } from '../../../../../components/molecules/Share';
import { SubProfile } from '../../../../../components/molecules/SubProfile';
import { useList } from '../../../../../hooks/useList';

Modal.setAppElement('#__next');

export const ListHeader: React.FC = () => {
  const {
    user,
    post,
    addLink,
    openModal,
    modalIsOpen,
    closeModal,
    DmLink,
    bookmark,
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
        <div className='mb-8'>
          <Headline headline={post.listname} />
        </div>

        <div className='text-center '>
          <div className='mb-2'>
            {user.uid == post.userid && <Button label='追加する' onClick={addLink} />}
          </div>
          <div className='mb-2'>
            <Button label='シェアする' onClick={openModal} />
            <Modal
              isOpen={modalIsOpen}
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
            {user.uid != post.userid && <Button label='一緒に行きたい' onClick={DmLink} />}
          </div>
          <div className='mb-2'>
            {user.uid && user.uid != post.userid && (
              <Button label='ブックマークする' onClick={bookmark} />
            )}
          </div>
          <div className=' mb-4'>
            {user.uid == post.userid && (
              <Button onClick={deleteList} label='このリストを削除する' primary={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
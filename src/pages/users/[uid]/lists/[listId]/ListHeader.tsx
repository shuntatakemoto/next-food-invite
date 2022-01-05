import { Emoji } from 'emoji-mart';
import React from 'react';
import Modal from 'react-modal';
import { Button } from '../../../../../components/atoms/Button';
import { Headline } from '../../../../../components/atoms/Headline';
import { Share } from '../../../../../components/molecules/Share';
import { SubProfile } from '../../../../../components/molecules/SubProfile';
import { ListsProps } from './useList';

Modal.setAppElement('#__next');

type ListsHeaderProps = {
  user: { uid: string; photoUrl: string; displayName: string; twitterUid: string };
  post: ListsProps;
  addLink: () => void;
  openModal: () => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  DmLink: () => void;
  bookmark: () => void;
  deleteList: () => void;
  shareUrl: string;
};

export const ListHeader: React.FC<ListsHeaderProps> = (props) => {
  return (
    <div className='pt-5 pl-4 xl:pl-6'>
      <SubProfile avatar={props.post.avatar} username={props.post.username} />
      <div className='mb-6'>
        <div className='py-10 text-center'>
          {props.post.emojiname && <Emoji emoji={props.post.emojiname} size={64} set='twitter' />}
        </div>
        <div className='mb-8'>
          <Headline headline={props.post.listname} />
        </div>

        <div className='text-center '>
          <div className='mb-2'>
            {props.user.uid == props.post.userid && (
              <Button label='追加する' onClick={props.addLink} />
            )}
          </div>
          <div className='mb-2'>
            <Button label='シェアする' onClick={props.openModal} />
            <Modal
              isOpen={props.modalIsOpen}
              onRequestClose={props.closeModal}
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
              <Share
                text={`${props.post.listname}\n`}
                url={props.shareUrl}
                onClick={props.closeModal}
              />
            </Modal>
          </div>
          <div className='mb-2'>
            {props.user.uid != props.post.userid && (
              <Button label='一緒に行きたい' onClick={props.DmLink} />
            )}
          </div>
          <div className='mb-2'>
            {props.user.uid && props.user.uid != props.post.userid && (
              <Button label='ブックマークする' onClick={props.bookmark} />
            )}
          </div>
          <div className=' mb-4'>
            {props.user.uid == props.post.userid && (
              <Button onClick={props.deleteList} label='このリストを削除する' primary={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

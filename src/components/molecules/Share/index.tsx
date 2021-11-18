import React from 'react';
import {
  TwitterIcon,
  TwitterShareButton,
  LineIcon,
  LineShareButton,
  HatenaIcon,
  HatenaShareButton,
} from 'react-share';
import { Button } from '../../atoms/Button';

export type ShareProps = {
  text: string;
  url: string;
  onClick: () => void;
};

export const Share: React.FC<ShareProps> = (props) => {
  return (
    <div className='text-center'>
      <p>このリストをシェア</p>
      <p>{props.text}</p>

      <ul className='flex justify-center list-none pt-4 pb-4'>
        <li className='mr-8'>
          <TwitterShareButton url={props.url} title={props.text}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </li>
        <li className='mr-8'>
          <LineShareButton url={props.url}>
            <LineIcon size={32} round={true} />
          </LineShareButton>
        </li>
        <li>
          <HatenaShareButton url={props.url}>
            <HatenaIcon size={32} round={true} />
          </HatenaShareButton>
        </li>
      </ul>
      <Button label='close' onClick={props.onClick} />
    </div>
  );
};

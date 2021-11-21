import React from 'react';

export type HeadlineProps = {
  headline: string;
};

export const Headline: React.FC<HeadlineProps> = ({ headline }) => {
  return <div className='text-2xl font-bold text-center'>{headline}</div>;
};

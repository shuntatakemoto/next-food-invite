import React from 'react';

export type HeadlineProps = {
  headline: string;
  size?: 'small' | 'medium' | 'large';
};

export const Headline: React.FC<HeadlineProps> = ({ headline, size = 'medium' }) => {
  const sizeMode =
    size === 'small'
      ? 'text-lg'
      : size === 'medium'
      ? 'text-2xl'
      : size === 'large'
      ? 'text-3xl'
      : '';
  return <div className={`${sizeMode} font-bold text-center`}>{headline}</div>;
};

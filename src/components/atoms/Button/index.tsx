import React from 'react';

export type ButtonProps = {
  primary?: boolean;
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const baseButton = 'rounded-full font-bold';
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : '';
  return primary ? (
    <button
      type='button'
      className={`w-48 font-bold py-2 px-5 text-white bg-red-700 ${baseButton} ${sizeMode}`}
      {...props}
    >
      {label}
    </button>
  ) : (
    <button
      type='button'
      className={` w-48 font-bold py-2 px-5 text-gray-600 bg-transparent shadow-inner ${baseButton} ${sizeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

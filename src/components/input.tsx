import React from 'react';

type InputProps = {
  title: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  textTransform?: React.CSSProperties['textTransform'];
  margin?: React.CSSProperties['margin'];
};

const Input: React.FC<InputProps> = ({
  title = '',
  name = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  textTransform = 'none',
  margin = 2,
}) => {
  return (
    <div style={{ margin: 5 }}>
      <p style={{ margin: 0 }}>{title}</p>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        placeholder={title}
        style={{
          textTransform,
          margin,
          width: 250,
          height: 30,
          fontSize: 18,
        }}
      />
    </div>
  );
};

export default Input;

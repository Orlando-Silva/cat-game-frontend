import React from 'react';

export interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FunctionComponent<InputProps> = ({ 
  placeholder, 
  onChange
}) => {

    return (
      <input className='rounded-lg p-2 border border-sky-100 hover:border-sky-500 focus:border-sky-100' type='text' placeholder={placeholder} onChange={(event) => onChange(event)} />
    )
  };
  
  export default Input;
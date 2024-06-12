import React from 'react';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FunctionComponent<ButtonProps> = ({ 
  label, 
  disabled = false, 
  onClick 
}) => {

    return (
      <button className='
        bg-sky-500 
        text-sky-50 
          rounded-lg 
          p-2 
          font-semibold 
          hover:bg-sky-100 
          hover:text-sky-500 
          h-12
          transition 
          ease-in-out 
          disabled:bg-sky-200 
          disabled:pointer-events-none'
          disabled={disabled} 
          onClick={(e) => onClick(e)}
        >
        { label }
      </button>
    )
  };
  
  export default Button;
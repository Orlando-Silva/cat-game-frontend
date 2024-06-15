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
}) => 
    (
      <button
        disabled={disabled} 
        onClick={(e) => onClick(e)}
        className='
          bg-primary-900
          text-accent-900

          hover:bg-accent-900
          hover:text-primary-900

          disabled:bg-dark-100
          disabled:text-dark-900
            disabled:pointer-events-none
          
            font-semibold 
            rounded-lg
            w-80
            p-2 
            
            transition
            ease-in-out
          '   
        >
        { label }
      </button>
    )

  
  export default Button;
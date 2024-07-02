import React from 'react';

export interface InputProps {
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value? : string
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  onChange,
  value,
}) => (
  <input
    data-testid="cat-input"
    type="text"
    placeholder={placeholder}
    defaultValue={value}
    onChange={(event) => onChange(event)}
    className="
        bg-primary-900
        text-accent-900
        placeholder:text-accent-900

        border-white
        rounded-lg
        p-2 border
      "
  />
);

export default Input;

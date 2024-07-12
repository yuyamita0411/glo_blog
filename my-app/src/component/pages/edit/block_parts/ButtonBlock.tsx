import React, { ChangeEvent } from 'react';

interface ButtonBlockProps {
  id: number;
  content: any;
  onChange: (id: number, key: string, value: string | number) => void;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ id, content, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(id, 'label', e.target.value);
  };

  return (
    <input type="text" name="label" value={content.label} onChange={handleInputChange} placeholder="Button" />
  );
};

export default ButtonBlock;

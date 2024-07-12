import React from 'react';

interface ButtonBlockProps {
  addBlock: (type: string) => void;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('button')}>Add Button</button>;
};

export default ButtonBlock;
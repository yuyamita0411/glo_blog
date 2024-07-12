import React from 'react';

interface CustomBlockProps {
  addBlock: (type: string) => void;
}

const CustomBlock: React.FC<CustomBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('custom')}>Add Custom Block</button>;
};

export default CustomBlock;
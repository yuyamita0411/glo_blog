import React from 'react';

interface BalloonBlockProps {
  addBlock: (type: string) => void;
}

const BalloonBlock: React.FC<BalloonBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('balloon')}>Add Balloon</button>;
};

export default BalloonBlock;
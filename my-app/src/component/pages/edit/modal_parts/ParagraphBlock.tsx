import React from 'react';

interface ParagraphBlockProps {
  addBlock: (type: string) => void;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('paragraph')}>Add Paragraph</button>;
};

export default ParagraphBlock;
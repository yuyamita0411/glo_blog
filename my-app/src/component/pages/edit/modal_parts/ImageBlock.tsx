import React from 'react';

interface ImageBlockProps {
  addBlock: (type: string) => void;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('image')}>Add Image</button>;
};

export default ImageBlock;
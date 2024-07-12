import React from 'react';

interface ReviewBlockProps {
  addBlock: (type: string) => void;
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('review')}>Add Review</button>;
};

export default ReviewBlock;

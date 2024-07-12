import React from 'react';

interface TitleBlockProps {
  addBlock: (type: string) => void;
  closeModal: () => void;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ addBlock, closeModal }) => {
  return (
    <div>
      <button onClick={() => { addBlock('h1'); closeModal(); }}>H1</button>
      <button onClick={() => { addBlock('h2'); closeModal(); }}>H2</button>
      <button onClick={() => { addBlock('h3'); closeModal(); }}>H3</button>
      <button onClick={() => { addBlock('h4'); closeModal(); }}>H4</button>
      <button onClick={() => { addBlock('h5'); closeModal(); }}>H5</button>
      <button onClick={() => { addBlock('h6'); closeModal(); }}>H6</button>
    </div>
  );
};

export default TitleBlock;

import React from 'react';

interface AccordionBlockProps {
  addBlock: (type: string) => void;
}

const AccordionBlock: React.FC<AccordionBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('accordion')}>Add Accordion</button>;
};

export default AccordionBlock;
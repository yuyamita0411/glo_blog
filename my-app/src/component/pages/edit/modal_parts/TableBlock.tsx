import React from 'react';

interface TableBlockProps {
  addBlock: (type: string) => void;
}

const TableBlock: React.FC<TableBlockProps> = ({ addBlock }) => {
  return <button onClick={() => addBlock('table')}>Add Table</button>;
};

export default TableBlock;
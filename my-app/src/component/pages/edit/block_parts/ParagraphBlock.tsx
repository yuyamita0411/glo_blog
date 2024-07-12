import React, { ChangeEvent } from 'react';

interface ParagraphBlockProps {
  id: number;
  content: any;
  onChange: (id: number, key: string, value: string | number) => void;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ id, content, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(id, 'text', e.target.value);
  };

  return (
    <textarea name="text" value={content.text} onChange={handleInputChange} placeholder="Paragraph" />
  );
};

export default ParagraphBlock;

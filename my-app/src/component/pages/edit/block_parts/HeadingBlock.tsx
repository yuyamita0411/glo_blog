import React, { ChangeEvent } from 'react';

interface HeadingBlockProps {
  id: number;
  type: string; // 見出しのタイプを受け取る
  content: any;
  onChange: (id: number, key: string, value: string | number) => void;
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ id, type, content, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(id, 'title', e.target.value);
  };

  return (
    <input type="text" name="title" value={content.title} onChange={handleInputChange} placeholder={type.toUpperCase()} />
  );
};

export default HeadingBlock;

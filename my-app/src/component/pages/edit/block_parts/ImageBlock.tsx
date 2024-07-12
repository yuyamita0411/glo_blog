import React, { ChangeEvent } from 'react';

interface ImageBlockProps {
  id: number;
  content: any;
  onChange: (id: number, key: string, value: string | number) => void;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ id, content, onChange }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        onChange(id, 'content', ev.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {typeof content === 'string' && content && <img src={content} alt="Uploaded" style={{ width: '100%' }} />}
    </>
  );
};

export default ImageBlock;

import React, { useState, useEffect } from 'react';

interface CustomBlockProps {
  id: number;
  content: { html: string };
  settings: any;
  onChange: (id: number, key: string, value: string | number) => void;
}

const CustomBlock: React.FC<CustomBlockProps> = ({ id, content, settings, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [htmlContent, setHtmlContent] = useState(content.html || '');

  useEffect(() => {
    setHtmlContent(content.html);
  }, [content.html]);

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlContent(e.target.value);
    onChange(id, 'html', e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(id, 'html', e.target.value);
  };

  return (
    <div
      onClick={() => setIsEditing(true)}
      style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
    >
      {isEditing ? (
        <textarea
          value={htmlContent}
          onChange={handleHtmlChange}
          style={{ width: '100%', height: '100px' }}
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlContent || '<textarea style="width:100%; height:100px;"></textarea>' }} />
      )}
    </div>
  );
};

export default CustomBlock;
import React, { useState } from 'react';

interface AccordionBlockProps {
  id: number;
  content: { title: string; text: string };
  settings: any;
  onChange: (id: number, key: string, value: string | number) => void;
}

const AccordionBlock: React.FC<AccordionBlockProps> = ({ id, content, settings, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, 'title', e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(id, 'text', e.target.value);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: `${settings.bottomSpace || 0}px` }}>
      <div
        onClick={toggleOpen}
        style={{
          border: `${settings.titleBorderWidth || 1}px solid ${settings.titleBorderColor || '#000'}`,
          backgroundColor: `${settings.titleBackgroundColor || '#fff'}`,
          color: `${settings.titleTextColor || '#000'}`,
          borderRadius: `${settings.titleBorderRadius || 0}px`,
          padding: `${settings.titlePadding || 10}px`,
          fontSize: `${settings.titleFontSizePC || 18}px`,
          boxShadow: `${settings.titleShadowHorizontal || 0}px ${settings.titleShadowVertical || 0}px ${settings.titleShadowBlur || 0}px ${settings.titleShadowSpread || 0}px ${settings.titleShadowColor || 'rgba(0,0,0,0)'}`,
          cursor: 'pointer'
        }}
      >
        <input
          type="text"
          value={content.title}
          onChange={handleTitleChange}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            width: '100%',
            fontSize: 'inherit'
          }}
          placeholder="タイトルを入力"
        />
      </div>
      {isOpen && (
        <div
          style={{
            border: `${settings.contentBorderWidth || 1}px solid ${settings.contentBorderColor || '#000'}`,
            backgroundColor: `${settings.contentBackgroundColor || '#fff'}`,
            color: `${settings.contentTextColor || '#000'}`,
            borderRadius: `${settings.contentBorderRadius || 0}px`,
            padding: `${settings.contentPadding || 10}px`,
            fontSize: `${settings.contentFontSizePC || 18}px`,
            boxShadow: `${settings.contentShadowHorizontal || 0}px ${settings.contentShadowVertical || 0}px ${settings.contentShadowBlur || 0}px ${settings.contentShadowSpread || 0}px ${settings.contentShadowColor || 'rgba(0,0,0,0)'}`,
            marginTop: '10px'
          }}
        >
          <textarea
            value={content.text}
            onChange={handleTextChange}
            style={{
              width: '100%',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'inherit',
              resize: 'none',
              fontSize: 'inherit'
            }}
            placeholder="コンテンツを入力"
          />
        </div>
      )}
    </div>
  );
};

export default AccordionBlock;
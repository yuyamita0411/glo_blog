import React from 'react';

interface BalloonBlockProps {
  id: number;
  content: {
    text: string;
    name: string;
    imageUrl: string;
  };
  settings: {
    balloonType: string;
    textColor: string;
    borderColor: string;
    backgroundColor: string;
    nameTextColor: string;
    nameBorderColor: string;
    nameBackgroundColor: string;
    fontSizePC: number;
    fontSizeTablet: number;
    fontSizeMobile: number;
    nameFontSizePC: number;
    nameFontSizeTablet: number;
    nameFontSizeMobile: number;
    direction: string;
    borderWidth: number;
    bottomSpace: number;
  };
  onChange: (id: number, key: string, value: string | number) => void;
}

const BalloonBlock: React.FC<BalloonBlockProps> = ({ id, content, settings, onChange }) => {
  const {
    text,
    name,
    imageUrl
  } = content;
  const {
    balloonType,
    textColor,
    borderColor,
    backgroundColor,
    nameTextColor,
    nameBorderColor,
    nameBackgroundColor,
    fontSizePC,
    fontSizeTablet,
    fontSizeMobile,
    nameFontSizePC,
    nameFontSizeTablet,
    nameFontSizeMobile,
    direction,
    borderWidth,
    bottomSpace
  } = settings;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(id, 'text', e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, 'name', e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          onChange(id, 'imageUrl', event.target.result.toString());
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div style={{ marginBottom: `${bottomSpace}px` }}>
      <div style={{ display: 'flex', flexDirection: direction === 'right' ? 'row-reverse' : 'row', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100px', height: '100px', marginBottom: '10px' }}>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id={`image-upload-${id}`} />
            <label htmlFor={`image-upload-${id}`}>
              <img src={imageUrl} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
            </label>
          </div>
          <div style={{ border: `${borderWidth}px solid ${nameBorderColor}`, backgroundColor: `${nameBackgroundColor}`, color: `${nameTextColor}`, padding: '5px', fontSize: `${nameFontSizePC}px` }}>
            <input type="text" value={name} onChange={handleNameChange} style={{ border: 'none', backgroundColor: 'transparent', color: 'inherit', textAlign: 'center' }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: direction === 'right' ? 'flex-end' : 'flex-start' }}>
          <div style={{ position: 'relative', maxWidth: '300px', border: `${borderWidth}px solid ${borderColor}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`, borderRadius: '15px', padding: '10px', fontSize: `${fontSizePC}px`, marginLeft: direction === 'right' ? '10px' : '0', marginRight: direction === 'right' ? '0' : '10px' }}>
            <textarea value={text} onChange={handleTextChange} style={{ width: '100%', border: 'none', backgroundColor: 'transparent', color: 'inherit', resize: 'none', fontSize: 'inherit' }} />
            <div style={{ position: 'absolute', top: '50%', left: direction === 'right' ? 'auto' : '-20px', right: direction === 'right' ? '-20px' : 'auto', width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: direction === 'right' ? '10px solid transparent' : `10px solid ${borderColor}`, borderRight: direction === 'right' ? `10px solid ${borderColor}` : '10px solid transparent' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalloonBlock;
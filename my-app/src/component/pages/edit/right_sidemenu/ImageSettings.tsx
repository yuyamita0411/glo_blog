import React from 'react';

interface ImageSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const ImageSettings: React.FC<ImageSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Image Settings</h2>
      <div className="setting-block-area">
        <label>
          Img Size (PC):
          <input
            type="number"
            value={blockSettings.imgSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'imgSizePC', e.target.value)}
          />
        </label>
        <label>
          Img Size (Mobile):
          <input
            type="number"
            value={blockSettings.imgSizeMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'imgSizeMobile', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageSettings;

import React from 'react';

interface ParagraphSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const ParagraphSettings: React.FC<ParagraphSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Paragraph Settings</h2>
      <div className="setting-block-area">
        <label>
          Font Size (PC):
          <input
            type="number"
            value={blockSettings.fontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizePC', e.target.value)}
          />
        </label>
        <label>
          Font Size (Tablet):
          <input
            type="number"
            value={blockSettings.fontSizeTablet || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizeTablet', e.target.value)}
          />
        </label>
        <label>
          Font Size (Mobile):
          <input
            type="number"
            value={blockSettings.fontSizeMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizeMobile', e.target.value)}
          />
        </label>
        <label>
          Font Color:
          <input
            type="color"
            value={blockSettings.fontColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'fontColor', e.target.value)}
          />
        </label>
        <label>
          Background Color:
          <input
            type="color"
            value={blockSettings.backgroundColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'backgroundColor', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ParagraphSettings;
import React from 'react';

interface HeadingSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const HeadingSettings: React.FC<HeadingSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Heading Settings</h2>
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
        <label>
          Icon Color:
          <input
            type="color"
            value={blockSettings.IconStartColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'IconStartColor', e.target.value)}
          />
        </label>
        <label>
          Icon:
          <select
            value={blockSettings.icon || 'none'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'icon', e.target.value)}
          >
            <option value="none">None</option>
            <option value="coffee">Coffee</option>
            <option value="arrow-right">Arrow Right</option>
            <option value="arrow-left">Arrow Left</option>
            <option value="check">Check</option>
          </select>
        </label>
        <label>
          Underline Style:
          <select
            value={blockSettings.underlineStyle || 'none'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'underlineStyle', e.target.value)}
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line Through</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default HeadingSettings;
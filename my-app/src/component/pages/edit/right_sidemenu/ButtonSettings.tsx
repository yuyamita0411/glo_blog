import React from 'react';

interface ButtonSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const ButtonSettings: React.FC<ButtonSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Button Settings</h2>
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
          Icon Color(start):
          <input
            type="color"
            value={blockSettings.IconStartColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'IconStartColor', e.target.value)}
          />
        </label>
        <label>
          Icon Color(end):
          <input
            type="color"
            value={blockSettings.IconEndColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'IconEndColor', e.target.value)}
          />
        </label>
        <label>
          Icon (Start):
          <select
            value={blockSettings.iconStart || 'none'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'iconStart', e.target.value)}
          >
            <option value="none">None</option>
            <option value="coffee">Coffee</option>
            <option value="arrow-right">Arrow Right</option>
            <option value="arrow-left">Arrow Left</option>
            <option value="check">Check</option>
          </select>
        </label>
        <label>
          Icon (End):
          <select
            value={blockSettings.iconEnd || 'none'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'iconEnd', e.target.value)}
          >
            <option value="none">None</option>
            <option value="coffee">Coffee</option>
            <option value="arrow-right">Arrow Right</option>
            <option value="arrow-left">Arrow Left</option>
            <option value="check">Check</option>
          </select>
        </label>
        <label>
          Border Radius:
          <input
            type="number"
            value={blockSettings.borderRadius || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'borderRadius', e.target.value)}
          />
        </label>
        <label>
          Border Width:
          <input
            type="number"
            value={blockSettings.borderWidth || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'borderWidth', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ButtonSettings;

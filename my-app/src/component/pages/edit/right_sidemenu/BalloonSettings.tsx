import React from 'react';

interface BalloonSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const BalloonSettings: React.FC<BalloonSettingsProps> = ({ blockSettings, handleSettingsChange, selectedBlock }) => {
  return (
    <div>
      <h2 className="mb-0">Balloon Settings</h2>
      <div className="setting-block-area">
        <label>
          Balloon Type:
          <select value={blockSettings.balloonType} onChange={(e) => handleSettingsChange(selectedBlock!, 'balloonType', e.target.value)}>
            <option value="normal">Normal</option>
            <option value="thought">Thought</option>
          </select>
        </label>
        <label>
          Text Color:
          <input type="color" value={blockSettings.textColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'textColor', e.target.value)} />
        </label>
        <label>
          Border Color:
          <input type="color" value={blockSettings.borderColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'borderColor', e.target.value)} />
        </label>
        <label>
          Background Color:
          <input type="color" value={blockSettings.backgroundColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'backgroundColor', e.target.value)} />
        </label>
        <label>
          Name Text Color:
          <input type="color" value={blockSettings.nameTextColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'nameTextColor', e.target.value)} />
        </label>
        <label>
          Name Border Color:
          <input type="color" value={blockSettings.nameBorderColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'nameBorderColor', e.target.value)} />
        </label>
        <label>
          Name Background Color:
          <input type="color" value={blockSettings.nameBackgroundColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'nameBackgroundColor', e.target.value)} />
        </label>
        <label>
          Font Size (PC):
          <input type="number" value={blockSettings.fontSizePC} onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizePC', e.target.value)} />
        </label>
        <label>
          Font Size (Tablet):
          <input type="number" value={blockSettings.fontSizeTablet} onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizeTablet', e.target.value)} />
        </label>
        <label>
          Font Size (Mobile):
          <input type="number" value={blockSettings.fontSizeMobile} onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizeMobile', e.target.value)} />
        </label>
        <label>
          Name Font Size (PC):
          <input type="number" value={blockSettings.nameFontSizePC} onChange={(e) => handleSettingsChange(selectedBlock!, 'nameFontSizePC', e.target.value)} />
        </label>
        <label>
          Name Font Size (Tablet):
          <input type="number" value={blockSettings.nameFontSizeTablet} onChange={(e) => handleSettingsChange(selectedBlock!, 'nameFontSizeTablet', e.target.value)} />
        </label>
        <label>
          Name Font Size (Mobile):
          <input type="number" value={blockSettings.nameFontSizeMobile} onChange={(e) => handleSettingsChange(selectedBlock!, 'nameFontSizeMobile', e.target.value)} />
        </label>
        <label>
          Direction:
          <select value={blockSettings.direction} onChange={(e) => handleSettingsChange(selectedBlock!, 'direction', e.target.value)}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
        <label>
          Border Width:
          <input type="number" value={blockSettings.borderWidth} onChange={(e) => handleSettingsChange(selectedBlock!, 'borderWidth', e.target.value)} />
        </label>
        <label>
          Bottom Space:
          <input type="number" value={blockSettings.bottomSpace} onChange={(e) => handleSettingsChange(selectedBlock!, 'bottomSpace', e.target.value)} />
        </label>
      </div>
    </div>
  );
};

export default BalloonSettings;

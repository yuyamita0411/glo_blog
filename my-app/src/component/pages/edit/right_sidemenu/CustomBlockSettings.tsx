import React from 'react';

interface CustomBlockSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const CustomBlockSettings: React.FC<CustomBlockSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Custom Block Settings</h2>
      <div className="setting-block-area">
        <label>
          Under Space:
          <input
            type="number"
            value={blockSettings.underSpace || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'underSpace', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default CustomBlockSettings;
import React from 'react';

interface ReviewSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const ReviewSettings: React.FC<ReviewSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Review Settings</h2>
      <div className="setting-block-area">
        <label>
          Title Font Size (PC):
          <input
            type="number"
            value={blockSettings.titleFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Title Font Size (Tablet):
          <input
            type="number"
            value={blockSettings.titleFontSizeTablet || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizeTablet', e.target.value)}
          />
        </label>
        <label>
          Title Font Size (SP):
          <input
            type="number"
            value={blockSettings.titleFontSizeSP || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizeSP', e.target.value)}
          />
        </label>
        <label>
          Title Color:
          <input
            type="color"
            value={blockSettings.titleColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleColor', e.target.value)}
          />
        </label>
        <label>
          Title Background Color:
          <input
            type="color"
            value={blockSettings.titleBgColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleBgColor', e.target.value)}
          />
        </label>
        <label>
          Review Title Font Size (PC):
          <input
            type="number"
            value={blockSettings.reviewTitleFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'reviewTitleFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Review Title Font Size (Tablet):
          <input
            type="number"
            value={blockSettings.reviewTitleFontSizeTablet || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'reviewTitleFontSizeTablet', e.target.value)}
          />
        </label>
        <label>
          Review Title Font Size (SP):
          <input
            type="number"
            value={blockSettings.reviewTitleFontSizeSP || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'reviewTitleFontSizeSP', e.target.value)}
          />
        </label>
        <label>
          Review Title Color:
          <input
            type="color"
            value={blockSettings.reviewTitleColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'reviewTitleColor', e.target.value)}
          />
        </label>
        <label>
          Review Title Background Color:
          <input
            type="color"
            value={blockSettings.reviewTitleBgColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'reviewTitleBgColor', e.target.value)}
          />
        </label>
        <label>
          Rate Font Size (PC):
          <input
            type="number"
            value={blockSettings.rateFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'rateFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Rate Font Size (Tablet):
          <input
            type="number"
            value={blockSettings.rateFontSizeTablet || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'rateFontSizeTablet', e.target.value)}
          />
        </label>
        <label>
          Rate Font Size (SP):
          <input
            type="number"
            value={blockSettings.rateFontSizeSP || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'rateFontSizeSP', e.target.value)}
          />
        </label>
        <label>
          Rate Color:
          <input
            type="color"
            value={blockSettings.rateColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'rateColor', e.target.value)}
          />
        </label>
        <label>
          Rate Background Color:
          <input
            type="color"
            value={blockSettings.rateBgColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'rateBgColor', e.target.value)}
          />
        </label>
        <label>
          Description Font Size (PC):
          <input
            type="number"
            value={blockSettings.descFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Description Font Size (Tablet):
          <input
            type="number"
            value={blockSettings.descFontSizeTablet || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descFontSizeTablet', e.target.value)}
          />
        </label>
        <label>
          Description Font Size (SP):
          <input
            type="number"
            value={blockSettings.descFontSizeSP || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descFontSizeSP', e.target.value)}
          />
        </label>
        <label>
          Description Color:
          <input
            type="color"
            value={blockSettings.descColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descColor', e.target.value)}
          />
        </label>
        <label>
          Description Background Color:
          <input
            type="color"
            value={blockSettings.descBgColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descBgColor', e.target.value)}
          />
        </label>
        <label>
          Border Color:
          <input
            type="color"
            value={blockSettings.borderColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'borderColor', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ReviewSettings;

import React from 'react';

interface AccordionSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const AccordionSettings: React.FC<AccordionSettingsProps> = ({ blockSettings, handleSettingsChange, selectedBlock }) => {
  return (
    <div>
      <h2 className="mb-0">Accordion Settings</h2>
      <div className="setting-block-area">
        <label>
          Title Text Color:
          <input type="color" value={blockSettings.titleTextColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleTextColor', e.target.value)} />
        </label>
        <label>
          Title Background Color:
          <input type="color" value={blockSettings.titleBackgroundColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleBackgroundColor', e.target.value)} />
        </label>
        <label>
          Title Border Color:
          <input type="color" value={blockSettings.titleBorderColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleBorderColor', e.target.value)} />
        </label>
        <label>
          Content Text Color:
          <input type="color" value={blockSettings.contentTextColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentTextColor', e.target.value)} />
        </label>
        <label>
          Content Background Color:
          <input type="color" value={blockSettings.contentBackgroundColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentBackgroundColor', e.target.value)} />
        </label>
        <label>
          Content Border Color:
          <input type="color" value={blockSettings.contentBorderColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentBorderColor', e.target.value)} />
        </label>
        <label>
          Title Font Size (PC):
          <input type="number" value={blockSettings.titleFontSizePC} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizePC', e.target.value)} />
        </label>
        <label>
          Title Font Size (Tablet):
          <input type="number" value={blockSettings.titleFontSizeTablet} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizeTablet', e.target.value)} />
        </label>
        <label>
          Title Font Size (Mobile):
          <input type="number" value={blockSettings.titleFontSizeMobile} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizeMobile', e.target.value)} />
        </label>
        <label>
          Content Font Size (PC):
          <input type="number" value={blockSettings.contentFontSizePC} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentFontSizePC', e.target.value)} />
        </label>
        <label>
          Content Font Size (Tablet):
          <input type="number" value={blockSettings.contentFontSizeTablet} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentFontSizeTablet', e.target.value)} />
        </label>
        <label>
          Content Font Size (Mobile):
          <input type="number" value={blockSettings.contentFontSizeMobile} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentFontSizeMobile', e.target.value)} />
        </label>
        <label>
          Title Padding:
          <input type="number" value={blockSettings.titlePadding} onChange={(e) => handleSettingsChange(selectedBlock!, 'titlePadding', e.target.value)} />
        </label>
        <label>
          Title Border Width:
          <input type="number" value={blockSettings.titleBorderWidth} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleBorderWidth', e.target.value)} />
        </label>
        <label>
          Title Border Radius:
          <input type="number" value={blockSettings.titleBorderRadius} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleBorderRadius', e.target.value)} />
        </label>
        <label>
          Content Padding:
          <input type="number" value={blockSettings.contentPadding} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentPadding', e.target.value)} />
        </label>
        <label>
          Content Border Width:
          <input type="number" value={blockSettings.contentBorderWidth} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentBorderWidth', e.target.value)} />
        </label>
        <label>
          Content Border Radius:
          <input type="number" value={blockSettings.contentBorderRadius} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentBorderRadius', e.target.value)} />
        </label>
        <label>
          Title Shadow Horizontal:
          <input type="number" value={blockSettings.titleShadowHorizontal} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleShadowHorizontal', e.target.value)} />
        </label>
        <label>
          Title Shadow Vertical:
          <input type="number" value={blockSettings.titleShadowVertical} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleShadowVertical', e.target.value)} />
        </label>
        <label>
          Title Shadow Blur:
          <input type="number" value={blockSettings.titleShadowBlur} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleShadowBlur', e.target.value)} />
        </label>
        <label>
          Title Shadow Spread:
          <input type="number" value={blockSettings.titleShadowSpread} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleShadowSpread', e.target.value)} />
        </label>
        <label>
          Title Shadow Color:
          <input type="color" value={blockSettings.titleShadowColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'titleShadowColor', e.target.value)} />
        </label>
        <label>
          Content Shadow Horizontal:
          <input type="number" value={blockSettings.contentShadowHorizontal} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentShadowHorizontal', e.target.value)} />
        </label>
        <label>
          Content Shadow Vertical:
          <input type="number" value={blockSettings.contentShadowVertical} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentShadowVertical', e.target.value)} />
        </label>
        <label>
          Content Shadow Blur:
          <input type="number" value={blockSettings.contentShadowBlur} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentShadowBlur', e.target.value)} />
        </label>
        <label>
          Content Shadow Spread:
          <input type="number" value={blockSettings.contentShadowSpread} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentShadowSpread', e.target.value)} />
        </label>
        <label>
          Content Shadow Color:
          <input type="color" value={blockSettings.contentShadowColor} onChange={(e) => handleSettingsChange(selectedBlock!, 'contentShadowColor', e.target.value)} />
        </label>
        <label>
          Bottom Space:
          <input type="number" value={blockSettings.bottomSpace} onChange={(e) => handleSettingsChange(selectedBlock!, 'bottomSpace', e.target.value)} />
        </label>
      </div>
    </div>
  );
};

export default AccordionSettings;

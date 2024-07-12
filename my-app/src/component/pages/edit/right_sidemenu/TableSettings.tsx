import React from 'react';

interface TableSettingsProps {
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const TableSettings: React.FC<TableSettingsProps> = ({ blockSettings, selectedBlock, handleSettingsChange }) => {
  return (
    <div>
      <h2 className="mb-0">Table Settings</h2>
      <div className="setting-block-area">
        <label>
          Columns (PC):
          <input
            type="number"
            value={blockSettings.columnsPC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'columnsPC', e.target.value)}
          />
        </label>
        <label>
          Columns (Tablet):
          <input
            type="number"
            value={blockSettings.fontSizeTablet || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'fontSizeTablet', e.target.value)}
          />
        </label>
        <label>
          Columns (Mobile):
          <input
            type="number"
            value={blockSettings.columnsMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'columnsMobile', e.target.value)}
          />
        </label>
        <label>
          Title Background Color:
          <input
            type="color"
            value={blockSettings.titleBackgroundColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleBackgroundColor', e.target.value)}
          />
        </label>
        <label>
          Title Font Color:
          <input
            type="color"
            value={blockSettings.titleFontColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontColor', e.target.value)}
          />
        </label>
        <label>
          Cell Title Background Color:
          <input
            type="color"
            value={blockSettings.cellTitleBackgroundColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'cellTitleBackgroundColor', e.target.value)}
          />
        </label>
        <label>
          Cell Title Font Color:
          <input
            type="color"
            value={blockSettings.cellTitleFontColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'cellTitleFontColor', e.target.value)}
          />
        </label>
        <label>
          Image Area Background Color:
          <input
            type="color"
            value={blockSettings.imageAreaBackgroundColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'imageAreaBackgroundColor', e.target.value)}
          />
        </label>
        <label>
          Description Font Color:
          <input
            type="color"
            value={blockSettings.descriptionFontColor || '#000000'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descriptionFontColor', e.target.value)}
          />
        </label>
        <label>
          Description Background Color:
          <input
            type="color"
            value={blockSettings.descriptionBackgroundColor || '#ffffff'}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descriptionBackgroundColor', e.target.value)}
          />
        </label>
        <label>
          Title Font Size (PC):
          <input
            type="number"
            value={blockSettings.titleFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Title Font Size (Mobile):
          <input
            type="number"
            value={blockSettings.titleFontSizeMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'titleFontSizeMobile', e.target.value)}
          />
        </label>
        <label>
          Cell Title Font Size (PC):
          <input
            type="number"
            value={blockSettings.cellTitleFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'cellTitleFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Cell Title Font Size (Mobile):
          <input
            type="number"
            value={blockSettings.cellTitleFontSizeMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'cellTitleFontSizeMobile', e.target.value)}
          />
        </label>
        <label>
          Description Font Size (PC):
          <input
            type="number"
            value={blockSettings.descriptionFontSizePC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descriptionFontSizePC', e.target.value)}
          />
        </label>
        <label>
          Description Font Size (Mobile):
          <input
            type="number"
            value={blockSettings.descriptionFontSizeMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'descriptionFontSizeMobile', e.target.value)}
          />
        </label>
        <label>
          Image Size:
          <input
            type="number"
            value={blockSettings.imageSize || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'imageSize', e.target.value)}
          />
        </label>
        <label>
          Padding (PC):
          <input
            type="number"
            value={blockSettings.paddingPC || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'paddingPC', e.target.value)}
          />
        </label>
        <label>
          Padding (Mobile):
          <input
            type="number"
            value={blockSettings.paddingMobile || ''}
            onChange={(e) => handleSettingsChange(selectedBlock!, 'paddingMobile', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default TableSettings;

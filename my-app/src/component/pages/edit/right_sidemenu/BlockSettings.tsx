import React from 'react';
import HeadingSettings from './HeadingSettings';
import ParagraphSettings from './ParagraphSettings';
import ImageSettings from './ImageSettings';
import ButtonSettings from './ButtonSettings';
import TableSettings from './TableSettings';
import ReviewSettings from './ReviewSettings';
import BalloonSettings from './BalloonSettings';
import CustomBlockSettings from './CustomBlockSettings';
import AccordionSettings from './AccordionSettings';

interface BlockSettingsProps {
  blockType: string;
  blockSettings: any;
  selectedBlock: number | null;
  handleSettingsChange: (id: number, key: string, value: string) => void;
}

const BlockSettings: React.FC<BlockSettingsProps> = ({ blockType, blockSettings, selectedBlock, handleSettingsChange }) => {
  switch (blockType) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return <HeadingSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'paragraph':
      return <ParagraphSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'image':
      return <ImageSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'button':
      return <ButtonSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'table':
      return <TableSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'review':
      return <ReviewSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'balloon':
      return <BalloonSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'custom':
      return <CustomBlockSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    case 'accordion':
      return <AccordionSettings blockSettings={blockSettings} selectedBlock={selectedBlock} handleSettingsChange={handleSettingsChange} />;
    default:
      return null;
  }
};

export default BlockSettings;
import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor, DragSourceMonitor } from 'react-dnd';
import HeadingBlock from './block_parts/HeadingBlock';
import ParagraphBlock from './block_parts/ParagraphBlock';
import ButtonBlock from './block_parts/ButtonBlock';
import ImageBlock from './block_parts/ImageBlock';
import ReviewBlock from './block_parts/ReviewBlock';
import TableBlock from './block_parts/TableBlock';
import CustomBlock from './block_parts/CustomBlock';
import BalloonBlock from './block_parts/BalloonBlock';
import AccordionBlock from './block_parts/AccordionBlock';

const ItemType = 'BLOCK';

interface BlockProps {
  id: number;
  type: string;
  content: any;
  index: number;
  moveBlock: (dragIndex: number, hoverIndex: number) => void;
  onClick: () => void;
  onChange: (id: number, key: string, value: string | number) => void;
  onDelete: (id: number) => void;
  settings: any;
  onSettingsChange: (id: number, key: string, value: string) => void;
}

interface DragItem {
  type: string;
  index: number;
}

const Block: React.FC<BlockProps> = ({ id, type, content, index, moveBlock, onClick, onChange, onDelete, settings, onSettingsChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop<DragItem>({
    accept: ItemType,
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveBlock(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '16px',
        margin: '4px',
        backgroundColor: 'white',
        border: '1px solid gray',
        cursor: 'move',
        position: 'relative',
      }}
      onClick={onClick}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        ×
      </button>
      {type === 'review' ? (
        <ReviewBlock id={id} content={content} settings={settings} onChange={onChange} onSettingsChange={onSettingsChange} />
      ) : type === 'table' ? (
        <TableBlock id={id} content={content} settings={settings} onChange={onChange} onSettingsChange={onSettingsChange} />
      ) : type.startsWith('h') ? (
        <HeadingBlock id={id} type={type} content={content} onChange={onChange} />
      ) : type === 'paragraph' ? (
        <ParagraphBlock id={id} content={content} onChange={onChange} />
      ) : type === 'button' ? (
        <ButtonBlock id={id} content={content} onChange={onChange} />
      ) : type === 'image' ? (
        <ImageBlock id={id} content={content} onChange={onChange} />
      ) : type === 'custom' ? (
        <CustomBlock id={id} content={content} settings={settings} onChange={onChange} />
      ) : type === 'balloon' ? (
        <BalloonBlock id={id} content={content} settings={settings} onChange={onChange} />
      ) : type === 'accordion' ? (
        <AccordionBlock id={id} content={content} settings={settings} onChange={onChange} />
      ) : null}
    </div>
  );
};

export default Block;
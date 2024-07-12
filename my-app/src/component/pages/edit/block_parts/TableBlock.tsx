import React, { useState, useEffect, useCallback } from 'react';

interface TableBlockProps {
  id: number;
  content: string;
  settings: any;
  onChange: (id: number, key: string, value: string) => void;
  onSettingsChange: (id: number, key: string, value: string) => void;
}

const TableBlock: React.FC<TableBlockProps> = ({ id, content, settings, onChange, onSettingsChange }) => {
  const [tableContent, setTableContent] = useState<any[]>(() => {
    if (typeof content === 'string') {
      try {
        return JSON.parse(content);
      } catch (error) {
        console.error('Error parsing content JSON:', error);
        return [];
      }
    } else {
      return Array.isArray(content) ? content : [];
    }
  });

  useEffect(() => {
    if (typeof content === 'string') {
      try {
        const parsedContent = JSON.parse(content);
        if (Array.isArray(parsedContent) && JSON.stringify(parsedContent) !== JSON.stringify(tableContent)) {
          setTableContent(parsedContent);
        }
      } catch (error) {
        console.error('Error parsing content JSON:', error);
        setTableContent([]);
      }
    } else {
      if (Array.isArray(content) && JSON.stringify(content) !== JSON.stringify(tableContent)) {
        setTableContent(content);
      }
    }
  }, [content]);

  const handleAddColumn = useCallback(() => {
    const newColumn = { title: '', image: '', description: '' };
    const newTableContent = [...tableContent, newColumn];
    setTableContent(newTableContent);
    onChange(id, 'content', JSON.stringify(newTableContent));
  }, [tableContent, onChange, id]);

  const handleDeleteColumn = (index: number) => {
    const newTableContent = tableContent.filter((_, i) => i !== index);
    setTableContent(newTableContent);
    onChange(id, 'content', JSON.stringify(newTableContent));
  };

  const handleColumnChange = (index: number, key: string, value: string) => {
    const newTableContent = tableContent.map((col, i) => (i === index ? { ...col, [key]: value } : col));
    setTableContent(newTableContent);
    onChange(id, 'content', JSON.stringify(newTableContent));
  };

  return (
    <div>
      <button onClick={handleAddColumn}>+ Add Column</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {tableContent.map((col, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={col.title}
              onChange={(e) => handleColumnChange(index, 'title', e.target.value)}
              placeholder="Title"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    handleColumnChange(index, 'image', ev.target?.result as string);
                  };
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
            />
            {col.image && <img src={col.image} alt="Uploaded" style={{ width: '50px', height: '50px' }} />}
            <textarea
              value={col.description}
              onChange={(e) => handleColumnChange(index, 'description', e.target.value)}
              placeholder="Description"
            />
            <button onClick={() => handleDeleteColumn(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableBlock;

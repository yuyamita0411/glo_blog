import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import update from 'immutability-helper';
import Modal from 'react-modal';
import Block from '../component/pages/edit/Block';
import BlockSettings from '../component/pages/edit/right_sidemenu/BlockSettings';
import TitleBlock from '../component/pages/edit/modal_parts/TitleBlock';
import ParagraphBlock from '../component/pages/edit/modal_parts/ParagraphBlock';
import ButtonBlock from '../component/pages/edit/modal_parts/ButtonBlock';
import TableBlock from '../component/pages/edit/modal_parts/TableBlock';
import ImageBlock from '../component/pages/edit/modal_parts/ImageBlock';
import ReviewBlock from '../component/pages/edit/modal_parts/ReviewBlock';
import BalloonBlock from '../component/pages/edit/modal_parts/BalloonBlock';
import CustomBlock from '../component/pages/edit/modal_parts/CustomBlock';
import AccordionBlock from '../component/pages/edit/modal_parts/AccordionBlock';
import './css/App.css';
import './css/PagesEdit/style.css';

const ItemType = 'BLOCK';

interface BlockType {
  id: number;
  type: string;
  content: any;
  settings: any;
}

const EditPage: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [showAddBar, setShowAddBar] = useState(false);
  const [hoveredBlockIndex, setHoveredBlockIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeadingModalOpen, setIsHeadingModalOpen] = useState(false);

  const [commonSettings, setCommonSettings] = useState({
    title: '',
    description: '',
    ogImage: '',
    metaKeywords: '',
  });

  const { pageId } = useParams<{ pageId: string }>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedBlock !== null) {
        handleDeleteBlock(selectedBlock);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBlock]);

  const moveBlock = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragBlock = blocks[dragIndex];
      setBlocks(
        update(blocks, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragBlock],
          ],
        })
      );
    },
    [blocks]
  );

  const addBlock = (type: string) => {
    let content;
    switch (type) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        content = { title: '' };
        break;
      case 'paragraph':
        content = { text: '' };
        break;
      case 'button':
        content = { label: '' };
        break;
      case 'table':
        content = JSON.stringify([]);
        break;
      case 'review':
        content = { title: '', reviews: [] };
        break;
      default:
        content = {};
    }
    const newBlock = { id: Date.now(), type, content, settings: {} };
    if (hoveredBlockIndex !== null) {
      setBlocks(
        update(blocks, {
          $splice: [[hoveredBlockIndex + 1, 0, newBlock]],
        })
      );
    } else {
      setBlocks([...blocks, newBlock]);
    }
    setShowAddBar(false);
    setIsModalOpen(false);
    setIsHeadingModalOpen(false);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasteContent = e.clipboardData.getData('text/html');
    if (pasteContent) {
      const newBlocks = parseHtml(pasteContent);
      if (newBlocks.length > 0) {
        setBlocks(prevBlocks => [...prevBlocks, ...newBlocks]);
      }
    }
  };  

  const parseHtml = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const newBlocks: BlockType[] = [];
  
    const extractTextContent = (element: HTMLElement): string => {
      return element.innerText || '';
    };
  
    const processNode = (node: ChildNode) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
  
      const element = node as HTMLElement;
      let blockType: string | null = null;
      let content: any = {};
      let settings: any = {};
  
      const style = element.getAttribute('style') || '';
  
      if (element.nodeName.match(/^H[1-6]$/)) {
        blockType = element.nodeName.toLowerCase();
        content = { title: extractTextContent(element) };
      } else if (element.nodeName === 'P') {
        blockType = 'paragraph';
        content = { text: extractTextContent(element) };
      } else if (element.nodeName === 'BUTTON') {
        blockType = 'button';
        content = { label: extractTextContent(element) };
      } else if (element.nodeName === 'TABLE') {
        const tableContent = Array.from(element.querySelectorAll('tr')).map(row => ({
          cells: Array.from(row.querySelectorAll('td')).map(cell => extractTextContent(cell as HTMLElement)),
        }));
        blockType = 'table';
        content = JSON.stringify(tableContent);
      } else if (element.nodeName === 'IMG') {
        blockType = 'image';
        content = (element as HTMLImageElement).src;
      } else if (element.classList.contains('review')) {
        const reviews = Array.from(element.querySelectorAll('.review')).map(reviewNode => ({
          reviewTitle: extractTextContent(reviewNode.querySelector('.review-title') as HTMLElement) || '',
          rate: parseFloat(extractTextContent(reviewNode.querySelector('.review-rate') as HTMLElement) || '0'),
          description: extractTextContent(reviewNode.querySelector('.review-description') as HTMLElement) || '',
        }));
        blockType = 'review';
        content = { title: extractTextContent(element.querySelector('.review-title') as HTMLElement) || '', reviews };
      } else if (element.classList.contains('balloon')) {
        blockType = 'balloon';
        content = {
          text: extractTextContent(element.querySelector('.balloon-text') as HTMLElement),
          name: extractTextContent(element.querySelector('.balloon-name') as HTMLElement),
          imageUrl: (element.querySelector('.balloon-image') as HTMLImageElement)?.src || ''
        };
        settings = { style };
      } else if (element.classList.contains('accordion')) {
        blockType = 'accordion';
        content = {
          title: extractTextContent(element.querySelector('.accordion-title') as HTMLElement),
          text: extractTextContent(element.querySelector('.accordion-text') as HTMLElement)
        };
        settings = { style };
      } else {
        // 特定の条件に該当しない場合でも、テキストコンテンツを抽出
        blockType = 'custom';
        content = { html: element.outerHTML };
      }
  
      if (blockType) {
        settings = { style };
        newBlocks.push({
          id: Date.now() + newBlocks.length,
          type: blockType,
          content,
          settings,
        });
      }
    };
  
    Array.from(doc.body.childNodes).forEach(processNode);
  
    return newBlocks;
  };  

  const closeModal = () => {
    setIsHeadingModalOpen(false);
    setIsModalOpen(false);
  };

  const handleChange = (id: number, key: string, value: string | number) => {
    setBlocks(blocks.map((block) => (block.id === id ? { ...block, content: { ...block.content, [key]: value } } : block)));
  };

  const handleSettingsChange = (id: number, key: string, value: string) => {
    setBlocks(blocks.map((block) => (block.id === id ? { ...block, settings: { ...block.settings, [key]: value } } : block)));
  };

  const handleDeleteBlock = (id: number) => {
    setBlocks(blocks.filter((block) => block.id !== id));
    if (selectedBlock === id) {
      setSelectedBlock(null);
    }
  };

  const handleMouseOver = (index: number) => {
    setHoveredBlockIndex(index);
    setShowAddBar(true);
  };

  const handleMouseLeave = () => {
    setShowAddBar(false);
  };

  const handleBlockClick = (id: number) => {
    setSelectedBlock(id);
    setShowSidebar(true);
  };

  const handleUpdateClick = () => {
    const blocksData = blocks.map((block) => {
      return {
        id: block.id,
        type: block.type,
        content: block.content,
        settings: block.settings,
      };
    });

    const data = {
      pageId,
      commonSettings,
      blocks: blocksData,
    };

    console.log(JSON.stringify(data, null, 2));
  };

  const handleCommonSettingsChange = (key: string, value: string) => {
    setCommonSettings({ ...commonSettings, [key]: value });
  };

  const selectedBlockSettings = selectedBlock !== null ? blocks.find((block) => block.id === selectedBlock)?.settings : null;

  return (
    <div className="main-column">
      <h1 className="pl-1rem">Edit Page</h1>
      <p className="pl-1rem">Welcome to the edit page!</p>
      <button
        className="pl-1rem"
        onClick={() => setShowSidebar(!showSidebar)}
        style={{ position: 'fixed', top: '10px', right: '10px' }}
      >
        {showSidebar ? '▶︎' : '◀︎'}
      </button>
      <div className="editor-content pl-1rem" onPaste={handlePaste} style={{ height: '1000px', overflowY: 'scroll' }}>
        {blocks.length === 0 && (
          <button onClick={() => setIsModalOpen(true)} style={{ margin: '20px', padding: '10px' }}>
            + Add Block
          </button>
        )}
        {blocks.map((block, index) => (
          <div key={block.id} onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
            <Block
              index={index}
              id={block.id}
              type={block.type}
              content={block.content}
              moveBlock={moveBlock}
              onClick={() => handleBlockClick(block.id)}
              onChange={handleChange}
              onDelete={handleDeleteBlock}
              settings={block.settings}
              onSettingsChange={handleSettingsChange}
            />
            {showAddBar && hoveredBlockIndex === index && (
              <div
                className="add-bar"
                style={{
                  position: 'relative',
                  backgroundColor: 'white',
                  height: 0,
                }}
              >
                <button
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
                  + Add Block
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {showSidebar && (
        <div
          className="sidebar"
          style={{
            width: '300px',
            position: 'fixed',
            right: '0',
            top: '0',
            height: '100%',
            backgroundColor: 'white',
            borderLeft: '1px solid gray',
            padding: '10px',
          }}
        >
          <button onClick={() => setShowSidebar(false)}>Close Sidebar</button>
          <h2 className="mb-0">Common Settings</h2>
          <div className="setting-block-area">
            <label>
              Title:
              <input
                type="text"
                value={commonSettings.title}
                onChange={(e) => handleCommonSettingsChange('title', e.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={commonSettings.description}
                onChange={(e) => handleCommonSettingsChange('description', e.target.value)}
              />
            </label>
            <label>
              OG Image:
              <input type="file" onChange={(e) => handleCommonSettingsChange('ogImage', e.target.value)} />
            </label>
            <label>
              Meta Keywords:
              <input
                type="text"
                value={commonSettings.metaKeywords}
                onChange={(e) => handleCommonSettingsChange('metaKeywords', e.target.value)}
              />
            </label>
          </div>
          {selectedBlock !== null && selectedBlockSettings && (
            <BlockSettings
              blockType={blocks.find((block) => block.id === selectedBlock)?.type || ''}
              blockSettings={selectedBlockSettings}
              selectedBlock={selectedBlock}
              handleSettingsChange={handleSettingsChange}
            />
          )}
          <div className="submit">
            <button type="button" onClick={handleUpdateClick}>
              更新する
            </button>
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} contentLabel="Add Block Modal">
        <h2 className="mb-0">Select Block Type</h2>
        <button onClick={() => setIsHeadingModalOpen(true)}>Add Heading</button>
        <ParagraphBlock addBlock={addBlock} />
        <ButtonBlock addBlock={addBlock} />
        <TableBlock addBlock={addBlock} />
        <ImageBlock addBlock={addBlock} />
        <ReviewBlock addBlock={addBlock} />
        <BalloonBlock addBlock={addBlock} />
        <CustomBlock addBlock={addBlock} />
        <AccordionBlock addBlock={addBlock} />
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
      <Modal
        isOpen={isHeadingModalOpen}
        onRequestClose={() => setIsHeadingModalOpen(false)}
        contentLabel="Add Heading Modal"
      >
        <h2 className="mb-0">Select Heading Level</h2>
        <TitleBlock addBlock={addBlock} closeModal={closeModal} />
        <button onClick={() => setIsHeadingModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default EditPage;

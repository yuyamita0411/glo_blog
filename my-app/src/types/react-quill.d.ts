declare module 'react-quill' {
    import * as React from 'react';
  
    interface Quill {
      deleteText(start: number, end: number): void;
      getContents(): any;
      getText(): string;
      insertText(index: number, text: string, formats: any, source?: string): void;
    }
  
    interface ReactQuillProps {
      value: string;
      defaultValue?: string;
      placeholder?: string;
      readOnly?: boolean;
      theme?: string;
      formats?: string[];
      modules?: any;
      bounds?: string | HTMLElement;
      onChange?: (content: string, delta: any, source: string, editor: Quill) => void;
      onChangeSelection?: (range: any, source: string, editor: Quill) => void;
      onFocus?: (range: any, source: string, editor: Quill) => void;
      onBlur?: (previousRange: any, source: string, editor: Quill) => void;
    }
  
    class ReactQuill extends React.Component<ReactQuillProps, any> {
      focus(): void;
      blur(): void;
      getEditor(): Quill;
    }
  
    export = ReactQuill;
  }
  
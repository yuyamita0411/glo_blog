import React from 'react';
import { useParams } from 'react-router-dom';

const StaticPagesEdit: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  return (
    <div className="main-column">
      <h1 className="pl-1rem">StaticPagesEdit</h1>
      <p className="pl-1rem">Welcome to the StaticPagesEdit page {pageId}!</p>
    </div>
  );
}

export default StaticPagesEdit;

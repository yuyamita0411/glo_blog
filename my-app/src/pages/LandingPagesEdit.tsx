import React from 'react';
import { useParams } from 'react-router-dom';

const LandingPagesEdit: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  return (
    <div className="main-column">
      <h1 className="pl-1rem">LandingPagesEdit</h1>
      <p className="pl-1rem">Welcome to the LandingPagesEdit page {pageId}!</p>
    </div>
  );
}

export default LandingPagesEdit;

import React from 'react';

export interface Review {
  id: number;
  title: string;
  rate: number;
  description: string;
}

interface ReviewBoxProps {
  reviews: Review[];
  onReviewChange: (id: number, field: keyof Review, value: string | number) => void;
  onAddReview: () => void;
  onDeleteReview: (id: number) => void;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ reviews, onReviewChange, onAddReview, onDeleteReview }) => {
  return (
    <div className="review-box">
      <h2 className="review-box-title">タイトル</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
          <input
            type="text"
            value={review.title}
            onChange={(e) => onReviewChange(review.id, 'title', e.target.value)}
            placeholder="レビュータイトル"
          />
          <div className="review-rate">
            <span>レート</span>
            <input
              type="number"
              value={review.rate}
              onChange={(e) => onReviewChange(review.id, 'rate', Number(e.target.value))}
              placeholder="レート"
            />
          </div>
          <textarea
            value={review.description}
            onChange={(e) => onReviewChange(review.id, 'description', e.target.value)}
            placeholder="ディスクリプション"
          />
          <button onClick={() => onDeleteReview(review.id)}>×</button>
        </div>
      ))}
      <button onClick={onAddReview}>+ Add Review</button>
    </div>
  );
};

export default ReviewBox;
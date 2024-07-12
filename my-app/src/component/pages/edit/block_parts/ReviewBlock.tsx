import React, { ChangeEvent, useState } from 'react';

interface ReviewBlockProps {
  id: number;
  content: any;
  settings: any;
  onChange: (id: number, key: string, value: string | number) => void;
  onSettingsChange: (id: number, key: string, value: string) => void;
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({ id, content, settings, onChange, onSettingsChange }) => {
  const [reviews, setReviews] = useState(content.reviews || []);

  const handleInputChange = (key: string, value: string | number) => {
    onChange(id, key, value);
  };

  const handleReviewChange = (index: number, key: string, value: string | number) => {
    const updatedReviews = reviews.map((review: any, i: any) => (i === index ? { ...review, [key]: value } : review));
    setReviews(updatedReviews);
    onChange(id, 'reviews', updatedReviews);
  };

  const addReview = () => {
    const newReview = { reviewTitle: '', description: '', rate: 0 };
    const updatedReviews: any = [...reviews, newReview];
    setReviews(updatedReviews);
    onChange(id, 'reviews', updatedReviews);
  };

  const deleteReview = (index: number) => {
    const updatedReviews = reviews.filter((_: any, i: any) => i !== index);
    setReviews(updatedReviews);
    onChange(id, 'reviews', updatedReviews);
  };

  return (
    <div className="review-container">
      <input
        type="text"
        name="title"
        value={content.title}
        onChange={(e) => handleInputChange('title', e.target.value)}
        placeholder="タイトルを入力"
        style={{ fontSize: `${settings.titleFontSizePC || 20}px`, color: settings.titleColor, backgroundColor: settings.titleBgColor }}
      />
      <button onClick={addReview}>+ Add Review</button>
      {reviews.map((review: any, index: any) => (
        <div key={index} className="review-box" style={{ border: `1px solid ${settings.borderColor || 'black'}`, padding: '10px', marginBottom: '20px' }}>
          <h4 style={{ fontSize: `${settings.reviewTitleFontSizePC || 18}px`, color: settings.reviewTitleColor, backgroundColor: settings.reviewTitleBgColor }}>
            <input
              type="text"
              name="reviewTitle"
              value={review.reviewTitle}
              onChange={(e) => handleReviewChange(index, 'reviewTitle', e.target.value)}
              placeholder="レビュータイトルを入力"
            />
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: settings.rateBgColor }}>
            <div className="stars" style={{ fontSize: `${settings.rateFontSizePC || 16}px`, color: settings.starColor || 'gold' }}>
              {'★'.repeat(Math.floor(review.rate)) + (review.rate % 1 !== 0 ? '☆' : '') + '☆'.repeat(4 - Math.floor(review.rate))}
            </div>
            <span style={{ fontSize: `${settings.rateFontSizePC || 16}px`, color: settings.rateColor, marginLeft: '8px' }}>
              <input
                type="number"
                name="rate"
                value={review.rate}
                onChange={(e) => handleReviewChange(index, 'rate', e.target.value)}
                min="0"
                max="5"
                step="0.5"
                placeholder="レートを入力"
              />
            </span>
          </div>
          <p style={{ fontSize: `${settings.descFontSizePC || 16}px`, color: settings.descColor, backgroundColor: settings.descBgColor }}>
            <textarea
              name="description"
              value={review.description}
              onChange={(e) => handleReviewChange(index, 'description', e.target.value)}
              placeholder="ディスクリプションを入力"
            />
          </p>
          <button onClick={() => deleteReview(index)} style={{ background: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px' }}>× Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReviewBlock;
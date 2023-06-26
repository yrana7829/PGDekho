import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
const WishListbtn = () => {
  return (
    <>
      <div
        style={{
          background: 'rgba(255, 255, 255, 1)',
          padding: '5px',
          border: '2px solid #e0e0e0',
          borderRadius: '5px',
        }}
      >
        <AiOutlineHeart style={{ fontSize: '30px', color: 'gray' }} />
      </div>
    </>
  );
};

export default WishListbtn;

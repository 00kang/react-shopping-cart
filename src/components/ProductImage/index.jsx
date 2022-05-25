import React, { useState } from "react";
import noImagePng from "../../assets/image/no-image.png";
import * as S from "./index.styles";

const ProductImage = ({ title, imgUrl, handleItemClick }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleImageError = () => {
    setImgSrc(noImagePng);
  };

  return (
    <S.ProductImage
      onError={handleImageError}
      src={imgSrc}
      alt={`${title} 이미지`}
      onClick={handleItemClick}
    />
  );
};

export default ProductImage;

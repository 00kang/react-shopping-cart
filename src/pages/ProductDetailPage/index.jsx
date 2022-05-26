import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getCartItemList,
  postCartItemByProductList,
} from "../../store/cartReducer";

import { useFetch } from "../../hooks/useFetch";

import Spinner from "../../components/common/Spinner";
import Button from "../../components/common/Button";
import {
  StyledBottomSection,
  StyledContainer,
  StyledProductImg,
  StyledProductName,
  StyledProductPrice,
  StyledProductPriceText,
  StyledTopSection,
} from "./index.styled";

import {
  ACTION_SUCCESS_MESSAGE,
  API_SERVER,
  REQUEST_METHOD,
} from "../../constants";

const REQUEST_PRODUCT_DETAIL_URL = (id) =>
  `${API_SERVER.BASE_URL}${API_SERVER.PATH.PRODUCTS}/${id}`;

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { id: productId } = useParams();

  const {
    data: product,
    fetch: getProduct,
    isLoading: isProductLoading,
    errorMessage: productErrorMessage,
  } = useFetch(REQUEST_METHOD.GET, REQUEST_PRODUCT_DETAIL_URL(productId), []);

  const {
    data: cartItemList,
    loading: isCartItemListLoading,
    errorMessage: cartItemErrorMessage,
  } = useSelector((state) => state.cartReducer);

  const handleClickAddToCartButton = (id, quantity) => () => {
    dispatch(
      postCartItemByProductList(
        [{ id, quantity }],
        ACTION_SUCCESS_MESSAGE.POST_CART_ITEM_SUCCESS_WITH_QUANTITY(quantity)
      )
    );
  };

  useEffect(() => {
    getProduct();
    dispatch(getCartItemList());
  }, []);

  if (isProductLoading || isCartItemListLoading) return <Spinner />;
  if (productErrorMessage || cartItemErrorMessage)
    return (
      <div>😱 Error: {productErrorMessage || cartItemErrorMessage} 😱</div>
    );

  const cartItemListIndex = cartItemList?.findIndex(
    (cartItem) => cartItem.id === product.id
  );
  const quantity =
    cartItemListIndex === -1 ? 0 : cartItemList[cartItemListIndex].quantity;

  return (
    <StyledContainer>
      <StyledTopSection>
        <StyledProductImg src={product.thumbnailUrl} alt={product.name} />
        <StyledProductName>{product.name}</StyledProductName>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledProductPriceText>금액</StyledProductPriceText>
        <StyledProductPrice>
          {product.price.toLocaleString()}원
        </StyledProductPrice>
      </StyledBottomSection>
      <AddToCartButton
        onClick={handleClickAddToCartButton(product.id, quantity + 1)}
      />
    </StyledContainer>
  );
}

function AddToCartButton({ ...props }) {
  return (
    <Button
      height="60px"
      fontSize="1.25rem"
      fontWeight="700"
      color="white"
      bgColor="brown"
      {...props}
    >
      장바구니 담기
    </Button>
  );
}

export default ProductDetailPage;

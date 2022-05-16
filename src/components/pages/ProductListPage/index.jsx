import React from "react";
import { useSelector } from "react-redux";

import { getProductList } from "../../../reducers/productList";

import Spinner from "../../common/Spinner";
import ProductCard from "./ProductCard";
import GridContainer from "../../common/GridContainer";
import ErrorPage from "../ErrorPage";
import { useThunk } from "../../../hooks/useThunk";

function ProductListPage() {
  const productList = useSelector((state) => state.productList.data);
  const isLoading = useSelector((state) => state.productList.isLoading);
  const errorMessage = useSelector((state) => state.productList.errorMessage);

  useThunk(getProductList);

  if (isLoading) return <Spinner />;
  if (errorMessage)
    return (
      <ErrorPage>
        😱 Error: 관리자에게 문의하세요.😱 <br /> %{errorMessage}%
      </ErrorPage>
    );
  if (!productList?.length) return <h2>😱 텅 비었어요~~ 😱</h2>;

  return (
    <GridContainer colNo={4}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridContainer>
  );
}

export default ProductListPage;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "@/redux/actions";

import StyledProductList from "@/pages/home/components/product-list/ProductList.styled";
import ProductItem from "@/pages/home/components/product-item/ProductItem";
import Error from "@/pages/error/components/Error";

function ProductList() {
  const { data, loading, error } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <Error />;

  return (
    <StyledProductList>
      {data && data.map((item) => <ProductItem key={item.id} {...item} />)}
    </StyledProductList>
  );
}

export default ProductList;

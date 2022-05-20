import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "../Product";
import ProductSkeleton from "../ProductSkeleton";
import { LOAD_ITEM_AMOUNT } from "../../constants/constants";

const Products = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {products.data.map((product) => (
        <Product
          product={product}
          key={product.id}
          {...product}
          onClick={() => {
            handleItemClick(product.id);
          }}
        />
      ))}
      {products.loading &&
        Array.from({ length: LOAD_ITEM_AMOUNT }).map((_, index) => (
          <ProductSkeleton key={`skeleton-${index}`} />
        ))}
    </>
  );
};

export default Products;

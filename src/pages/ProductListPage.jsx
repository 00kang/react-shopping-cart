import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from '../components/Product';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import { MESSAGE, SERVER_PATH } from '../constant';
import useCart from '../hooks/useCart';

function ProductListPage() {
  const { data: productList, isLoading, isError } = useFetch(SERVER_PATH.PRODUCTS);
  const cartList = useSelector(({ cart }) => cart.cart);
  const { addItem, deleteItem } = useCart();

  const handleCartItem = (id, color) => {
    if (color) {
      deleteItem(id);
      alert(MESSAGE.REMOVE);
      return;
    }
    addItem(id);
    alert(MESSAGE.ADD);
  };

  if (isError) return <h1>error</h1>;
  if (isLoading) return <Loading />;

  return (
    <StyledContent>
      <StyledGridContainer>
        {productList.map((product) => {
          const isCart = cartList.some(({ id }) => id === product.id);
          return (
            <Product
              key={product.id}
              productData={product}
              handleCartItem={handleCartItem}
              isCart={isCart}
            />
          );
        })}
      </StyledGridContainer>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5vh;
`;

const StyledGridContainer = styled.div`
  display: grid;
  gap: 18px;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  overflow-y: auto;
`;

export default ProductListPage;

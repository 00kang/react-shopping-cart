import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import ProductItem from '../components/ProductItem';
import store from 'store';

import GlobalStyles from 'styles/GlobalStyles';

export default {
  title: 'Component/ProductItem',
  component: ProductItem,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Provider store={store}>
    <Global styles={GlobalStyles} />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ProductItem {...args} />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const DefaultTemplate = Template.bind({});

DefaultTemplate.args = {
  thumbnail: 'https://storybook.takealook.kr/image/potato.jpg',
  name: '감자',
  price: 50000,
  id: 0,
};

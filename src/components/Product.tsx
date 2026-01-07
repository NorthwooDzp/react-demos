import * as React from 'react';
import { type ReactNode } from 'react';

type InputProps = {
  name: string;
  price?: number;
  children?: ReactNode;
};

const Product = ({ name, price = 600, children }: InputProps): React.JSX.Element => {
  return (
    <div>
      <p>Product name: {name}</p>
      <p>Product price: ${price}</p>
      {children}
    </div>
  );
};

export default Product;

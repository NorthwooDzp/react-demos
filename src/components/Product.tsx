type InputProps = {
  name: string;
  price?: number;
};

const Product = ({ name, price = 600 }: InputProps) => {
  return (
    <div>
      <p>Product name: {name}</p>
      <p>Product price: ${price}</p>
    </div>
  );
};

export default Product;

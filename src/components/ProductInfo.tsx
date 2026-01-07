const ProductInfo = () => {
  const product = {
    name: 'Laptop',
    price: 1200,
    availability: 'In stock',
  };
  return (
    <div>
      <h3>Product: {product.name}</h3>
      <h3>Price: {product.price} $</h3>
      <h3>Availability: {product.availability}</h3>
    </div>
  );
};

export default ProductInfo;

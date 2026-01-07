const ProductsList = () => {
  const products = [
    { id: 1, name: 'Phone', price: '$699' },
    { id: 2, name: 'Laptop', price: '$1200' },
    { id: 3, name: 'Headphones', price: '$199' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{price}$</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsList;

import Person from './components/Person.tsx';
import Product from './components/Product.tsx';

const App = () => {
  return (
    <>
      <Person name={'Some user'} age={24} />
      <Product name={'Some product'}>
        <p>Children content projection for Product card</p>
      </Product>
    </>
  );
};

export default App;

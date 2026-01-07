import WelcomeMessage from './WelcomeMessage.tsx';
import Greeting from './Greeting.tsx';
import ProductInfo from './ProductInfo.tsx';

const MainContent = () => {
  return (
    <>
      <main>
        <h2>Main content</h2>
        <WelcomeMessage />
      </main>
      <Greeting />
      <ProductInfo />
    </>
  );
};

export default MainContent;

/*import Header from './components/Header';
import Footer from './components/Footer.tsx';
import MainContent from './components/MainContent.tsx';*/

const App = () => {
  const list: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      <ul>
        {list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      {/*<Header />
      <MainContent />
      <Footer />*/}
    </>
  );
};

export default App;

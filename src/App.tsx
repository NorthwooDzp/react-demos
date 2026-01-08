import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  function increaseCount(): void {
    setCounter(counter + 1);
  }

  setTimeout(() => {
    setCounter(40);
  }, 5000);

  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={increaseCount}>
        Increase count
      </button>
    </>
  );
};

export default App;

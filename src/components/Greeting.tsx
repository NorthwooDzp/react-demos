const Greeting = () => {
  const name: string = 'John';
  const date: Date = new Date();
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>{date.toString()}</p>
    </div>
  );
};

export default Greeting;

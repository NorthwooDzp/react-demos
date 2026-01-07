type InputProps = {
  name: string;
  age: number;
};

const Person = ({ name, age }: InputProps) => {
  return (
    <div>
      <p>Person name: {name}</p>
      <p>Person age: {age}</p>
      <hr />
    </div>
  );
};

export default Person;

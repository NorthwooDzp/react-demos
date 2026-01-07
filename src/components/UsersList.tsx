const UsersList = () => {
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Diana', age: 40 },
  ];

  return (
    <ul>
      {users.map(({ id, name, age }) => (
        <li key={id}>
          User name: {name}, age: {age}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;

import Weather from './components/Weather.tsx';
import UserStatus from './components/UserStatus.tsx';

const App = () => {
  return (
    <>
      <Weather temperature={10} />
      <Weather temperature={22} />
      <Weather temperature={36} />
      <hr />

      <UserStatus isLoggedIn={false} isAdmin={false} />
      <UserStatus isLoggedIn={true} isAdmin={false} />
      <UserStatus isLoggedIn={true} isAdmin={true} />
    </>
  );
};

export default App;

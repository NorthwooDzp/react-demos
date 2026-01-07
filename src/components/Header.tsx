const Header = () => {
  const linkItems = ['Home', 'About', 'Contact'].map((el) => <a href="#">{el}</a>);

  return (
    <header>
      <h1>Welcome to my website</h1>
      <nav>{linkItems}</nav>
    </header>
  );
};

export default Header;

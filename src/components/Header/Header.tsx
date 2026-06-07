import './Header.scss';

function Header() {
  return (
    <header className="header">
      {/* <div className="logo">
        Hai Hoang
      </div> */}
      <h2>Hai Hoang</h2>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
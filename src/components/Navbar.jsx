function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LUXE</h2>

      <div className="nav-links">
        <a href="#shop">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#deals">Deals</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-icons">
        <span>⌕</span>
        <span>♡</span>
        <span>🛒</span>
        <span>♙</span>
      </div>
    </nav>
  );
}

export default Navbar;
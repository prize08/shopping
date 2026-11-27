function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>LUXE<span>.</span></h2>
          <p>
            Discover your style with LUXE.
            Fashion that makes every moment special.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/products">Shop</a>
          <a href="/categories">Categories</a>
          <a href="/deals">Deals</a>
        </div>

        <div className="footer-links">
          <h3>Customer Support</h3>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQs</a>
          <a href="/shipping">Shipping Policy</a>
          <a href="/returns">Return Policy</a>
        </div>

        <div className="footer-contact">
          <h3>Stay Connected</h3>
          <p>Email: support@luxe.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 LUXE. All rights reserved.</p>
        <p>Designed with style. Built with passion.</p>
      </div>
    </footer>
  );
}

export default Footer;

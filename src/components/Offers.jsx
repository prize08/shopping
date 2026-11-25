function Offers() {
  return (
    <section className="offers-section">
      <div className="offer-content">
        <span className="offer-label">LIMITED TIME OFFER</span>

        <h2>
          Upgrade Your Style.
          <br />
          Save More.
        </h2>

        <p>
          Enjoy exclusive deals on your favourite styles.
          Don't miss out on these limited-time offers!
        </p>

        <div className="offer-discount">
          <strong>30% OFF</strong>
          <span>On selected collections</span>
        </div>

        <button className="offer-btn">
          Shop Now →
        </button>
      </div>

      <div className="offer-visual">
        <div className="offer-circle">
          <span>UP TO</span>
          <strong>30%</strong>
          <span>OFF</span>
        </div>

        <div className="offer-decoration decoration-one"></div>
        <div className="offer-decoration decoration-two"></div>
      </div>
    </section>
  );
}

export default Offers;

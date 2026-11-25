import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  // Access cart data from CartContext
  const { cart, total } = useCart();

  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>

      {/* Check whether cart is empty */}
      {cart.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        <>
          {/* Display all cart products */}
          <div className="cart-products">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>
              Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </p>

            <h3>Total Amount: ₹{total}</h3>

            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

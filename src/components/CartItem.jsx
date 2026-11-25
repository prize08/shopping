import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      {/* Product Image */}
      <img src={item.image} alt={item.name} width="120" />

      {/* Product Details */}
      <div>
        <h3>{item.name}</h3>

        <p>Price: ₹{item.price}</p>

        {/* Quantity Controls */}
        <button onClick={() => decreaseQuantity(item.id)}>-</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>+</button>

        {/* Remove Button */}
        <button onClick={() => removeFromCart(item.id)}>Remove</button>

        <p>Subtotal: ₹{item.price * item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;

import { Link } from "react-router-dom";
import { useCartstore } from "../store/Cartstore";
import Navbar from "./Navbar";

function Cart() {
  const cart = useCartstore((state) => state.cart)
  const removeFromCart = useCartstore((state) => state.removeFromCart)
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-3xl font-bold text-center pt-5 mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {cart.map((item, index) => (
            <div
              key={item.id}
              className="bg-white flex items-center justify-between p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 cursor-pointer hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;

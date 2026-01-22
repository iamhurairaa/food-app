import { Link } from 'react-router-dom';
import { useCartstore } from '../store/Cartstore';


function Navbar() {

  const cart = useCartstore((state) => state.cart)
  const search = useCartstore((state) => state.search)
  const setSearch = useCartstore((state) => state.setSearch)

  return (
    <nav className='bg-black flex items-center justify-around gap-44 p-3 '>
      <Link to="/">
        <img
          src="/Foody Zone.svg"
          alt="Foody Zone"
          className="h-10" />
      </Link>
      <div className='flex items-center gap-5'>
        <input
          type="text"
          placeholder='Search Food Here!'
          className="w-64 p-1 border rounded-lg hidden sm:block placeholder:text-[14px] bg-gray-200 outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/cart" className="relative text-xl">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
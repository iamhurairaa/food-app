import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { useCartstore } from "./store/Cartstore";

const foods = [
    {
        id: 1,
        name: "Burger",
        price: "$5",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
        id: 2,
        name: "Pizza",
        price: "$8",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 3,
        name: "Pasta",
        price: "$6",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    },
    {
        id: 4,
        name: "chicken",
        price: "$7",
        image: "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "Zinger",
        price: "$5",
        image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        name: "Fries",
        price: "$4",
        image: "https://plus.unsplash.com/premium_photo-1683657860399-60f51361c65a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        name: "Salad",
        price: "$3",
        image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 8,
        name: "Lava Cack",
        price: "$6",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

function Home() {

    const [favourites, setFavourites] = useState([]);
    const addToCart = useCartstore((state) => state.addToCart)
    const search = useCartstore((state) => state.search)
    const setSearch = useCartstore((state) => state.setSearch)


    const filterFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase()));

    const toggleFavourite = (id) => {
        setFavourites((prev) =>
            prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
    };

    const placeOrder = (food) => {
        addToCart(food)

        toast.success("Added to Cart, Thanks for your Order!", {
            duration: 3000,
            position: "top-center",
            style: {
                background: "#22c55e",
                color: "#fff",
                borderRadius: "8px",
            },
            icon: "😄",
        });
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar
                search={search}
                setSearch={setSearch}
            />

            <h1 className="text-3xl font-bold text-center pt-3 mb-8">🍔 Food Menu</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-2 gap-6">

                {filterFoods.map((food) => (
                    <div
                        key={food.id}
                        className="bg-white relative rounded-lg shadow-md overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFavourite(food.id)}
                            className="absolute cursor-pointer top-2 right-2 text-xl"
                        >
                            {favourites.includes(food.id) ? "❤️" : "🤍"}
                        </button>

                        <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />

                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{food.name}</h2>
                            <p className="text-gray-600 mt-1">{food.price}</p>

                            <button
                                className="mt-4 w-full cursor-pointer bg-green-500 text-white py-2 rounded hover:bg-green-600"
                                onClick={() => placeOrder(food)}
                            >Order Now</button>
                        </div>
                    </div>
                ))}

            </div>

            <Toaster />
        </div>
    )
}

export default Home;
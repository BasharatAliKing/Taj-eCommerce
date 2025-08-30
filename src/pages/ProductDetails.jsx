import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../useContext/UserContext";

const ProductDetails = () => {
  const params = useParams();
  const { setCart } = useContext(UserContext);
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const getallfoodItems = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/getfooditembyid/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setItem(json.foodItem);
    } catch (error) {
      console.log(error);
    }
  };

const handleAddtoCart = (e) => {
  e.preventDefault();
  // Always parse correctly and fallback to empty array
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!Array.isArray(cart)) cart = []; // safety check
  } catch (err) {
    cart = [];
  }

  // check if product already exists in cart
  const existingProductIndex = cart.findIndex(
    (cartItem) => cartItem._id === item._id
  );

  if (existingProductIndex !== -1) {
    // product already exists → increase quantity
    cart[existingProductIndex].quantity += quantity;
  } else {
    // new product → add it to cart
    cart.push({ ...item, quantity });
  }

  // save updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // update global state if using context
  setCart(cart);

  setMessage("Item added to cart!");
};

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  useEffect(() => {
    getallfoodItems();
  }, []);
  return (
    <div className="font-sans bg-[#f9f8f4]">  
      {/* Breadcrumb */}
      <div className="px-8  py-10 text-xl font-medium text-gray-600 capitalize">
        Home / {item.category} /{" "}
        <span className="font-semibold">{item.name}</span>
      </div>
      {/* Main Content */}
      {item && (
        <div className="grid md:grid-cols-2 gap-8 px-8">
          {/* Product Images */}
          <div>
            <img
              src={`http://localhost:3000/${item.imageUrl}`}
              alt={item.name}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Product Info */}
          <div className="flex flex-col gap-6 my-auto">
            <h2 className="text-3xl font-bold">{item.name}</h2>
            <p className="text-green-600 font-semibold">{item.description}</p>
            <div className="text-2xl font-bold">£{item.price}</div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 border rounded-full text-xl"
              >
                −
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 border rounded-full text-xl"
              >
                +
              </button>
              <Link onClick={handleAddtoCart} className="bg-black cursor-pointer text-white hover:bg-yellow hover:text-black font-medium px-6 py-2 rounded-full ml-4">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

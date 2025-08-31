import React, { useContext, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import UserContext from "../useContext/UserContext";

const CheckoutPage = () => {
  const {cart,total}=useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
  };
  return (
    <div className="min-h-screen font-sketch flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 space-y-6"
        >
          {/* Contact */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>
          {/* Delivery */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Delivery</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border rounded-lg p-3"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border rounded-lg p-3"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full border rounded-lg p-3 mt-3"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4 mt-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border rounded-lg p-3"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="postcode"
                placeholder="Postcode"
                className="border rounded-lg p-3"
                value={formData.postcode}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full border rounded-lg p-3 mt-3"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Shipping */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Shipping method</h2>
            <div className="border rounded-lg p-3 bg-gray-100 flex justify-between">
              <span>Store Pickup</span>
              <span className="font-semibold">FREE</span>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Payment</h2>
            <div className="grid gap-3">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card number"
                className="border rounded-lg p-3"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  className="border rounded-lg p-3"
                  value={formData.expiry}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="border rounded-lg p-3"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="cardName"
                placeholder="Name on card"
                className="border rounded-lg p-3"
                value={formData.cardName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4"
          >
            Review order
          </button>
        </form>
        {/* Right Side - Order Summary */}
        <div className="bg-white shadow-md rounded-2xl p-6 h-fit">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        {
          cart.map((val,index)=>(
              <div key={index} className="flex items-center bg-gray-100 rounded-md p-2 gap-4 mb-4">
            <img
              src={`http://localhost:3000/${val.imageUrl}`}
              alt="Product"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">{val.name}</p>
              <p className="text-gray-600">Price: £{val.price}  </p>
              <p className="text-gray-600">Quantity: {val.quantity}  </p>
            </div>
          </div>
          ))
        }
          {/* <input
            type="text"
            placeholder="Discount code or gift card"
            className="w-full border rounded-lg p-3"
          />
          <button className="w-full border rounded-lg p-2 mt-2">Apply</button> */}

          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>£{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

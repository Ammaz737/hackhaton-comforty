"use client";
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart } from "../actions/actions"; // Assuming this is where you're getting cart items
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  inventory: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fetch cart items when component mounts
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveFromCart = (productId: string) => {
    Swal.fire({
      title: "Are you sure you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId);
        setCartItems(getCartItems());
      }
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          Your cart is empty. Add items to your cart to view them here.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    ${item.price.toFixed(2)} x {item.inventory}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item._id}
                  className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <p className="font-md text-slate-900">{item.title}</p>
                      <p className="text-sm text-blue-600">
                        ${item.price.toFixed(2)} x {item.inventory}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-lg font-semibold text-center">
              <p>Total Price: ${cartItems.reduce((acc, item) => acc + item.price * item.inventory, 0).toFixed(2)}</p>
            </div>
            <Link href="/checkout">
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

// import { CartContext,clearCart  } from '../../contexts/cart.context';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { firestore,auth } from '../../utils/firebase/firebase.utils'
import { collection, doc, setDoc } from "firebase/firestore";

import './checkout.styles.scss'





const saveOrderToFirebase = async (orderDetails, userId) => {
  try {
      const orderRef = doc(collection(firestore, 'orders'));
      const createdAt = new Date();
      
      await setDoc(orderRef, {
          orderDetails,
          userId,
          
          createdAt
      });

      console.log("Order saved successfully!");
  } catch (error) {
      console.error("Error saving order to Firebase:", error);
  }
};





const Checkout = () => {
  const navigate=useNavigate();
  const [amount, setAmount] = useState(0);
  const [orderMessage, setOrderMessage] = useState("");

  const { cartItems, cartTotal,clearCart } = useContext(CartContext);

  useEffect(() => {
    // Set amount to cartTotal whenever cartTotal changes
    setAmount(cartTotal);
  }, [cartTotal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    }
    else {
      var options = {
        key: "rzp_test_GrnkuyKAxQjq4Z",
        key_secret: "rzp_test_GrnkuyKAxQjq4Z",
        amount: amount*100,
        currency: "INR",
        name: "test",
        description: "testing",
        
handler: function (response) {
  alert("Order Placed Successfully");

  // Use a self-invoking async function to handle the async operation
  (async () => {
      try {
          const user = auth.currentUser;  // Directly getting the currentUser from Firebase Auth
          if (user && user.email) {
              await saveOrderToFirebase(cartItems, user.email);  // Saving user's email
              console.log("Order saved to Firebase successfully");
          } else {
              console.error("No user is authenticated or user has no email");
          }
      } catch (error) {
          console.error("Failed to save order to Firebase:", error);
      }
  })();

  // navigate('/');  // Redirect if needed or any other post-payment logic
  clearCart();
  setOrderMessage("Your items will be delivered soon");
},

        prefill: {
          name: "test",
          email: "test@gmail.com",
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ₹ {cartTotal}</div>
      <button className='total' onClick={handleSubmit}>Pay </button>
      {orderMessage && <h1>{orderMessage}</h1>}
    </div>
  );
};

export default Checkout;

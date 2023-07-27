import { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss'


const Checkout = () => {
  const navigate=useNavigate();
  const [amount, setAmount] = useState(0);

  const { cartItems, cartTotal } = useContext(CartContext);

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
          // navigate('/');
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
    </div>
  );
};

export default Checkout;

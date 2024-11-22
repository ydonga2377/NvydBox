import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        nameOnCard: '',
    });
    const [address, setAddress] = useState({
        fullName: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch cart items from the backend
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/api/cart'); // Adjust API endpoint as needed
                setCartItems(response.data);
                calculateTotal(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        fetchCartItems();
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalAmount(total);
    };

    const handlePaymentChange = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const transaction = {
                amount: totalAmount,
                paymentMethod: 'Credit Card', // Adjust based on payment method
                transactionDate: new Date(),
                status: 'pending', // Can change based on real payment status
            };

            const response = await axios.post('/api/checkout', {
                userId: 'userId', // Replace with actual user ID
                items: cartItems.map(item => ({
                    gameId: item.id, // Assuming each item has an id
                    title: item.productName,
                    image: item.imageUrl, // Assuming each item has an image
                    price: item.price,
                })),
                transaction,
                address,
            });

            alert('Checkout successful! Order ID: ' + response.data._id);
            // Redirect or clear cart as necessary
        } catch (error) {
            console.error('Checkout error:', error);
            setError('Checkout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {error && <p className="error">{error}</p>}
            <div className="cart-items">
                <h3>Your Cart</h3>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h4>{item.productName} (x{item.quantity})</h4>
                            <p>Price: ${item.price.toFixed(2)}</p>
                        </div>
                    ))
                )}
                <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            </div>

            <form onSubmit={handleCheckout} className="payment-form">
                <h3>Payment Information</h3>
                <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on Card"
                    value={paymentInfo.nameOnCard}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="expirationDate"
                    placeholder="MM/YY"
                    value={paymentInfo.expirationDate}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentChange}
                    required
                />
                <h3>Shipping Address</h3>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={address.fullName}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={address.email}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={address.phone}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="text"
                    name="addressLine1"
                    placeholder="Address Line 1"
                    value={address.addressLine1}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="text"
                    name="addressLine2"
                    placeholder="Address Line 2"
                    value={address.addressLine2}
                    onChange={handleAddressChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={address.city}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={address.state}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    required
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={address.country}
                    onChange={handleAddressChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Confirm Payment'}
                </button>
            </form>
        </div>
    );
};

export default Checkout;

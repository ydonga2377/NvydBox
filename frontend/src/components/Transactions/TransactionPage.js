import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios
import "./TransactionPage.css";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions when component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Assuming the userId is available in your app context or passed as a prop
        const userId = "userIdHere"; // Replace with actual userId
        const response = await axios.get('http://localhost:5000/api/transactions/getUserTransactions/${userId}');
        setTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading transactions...</div>;
  }

  return (
    <div className="transaction-page">
      <h1>Transaction History</h1>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Game Title</th>
            <th>Purchase Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.gameId.title}</td>
              <td>{new Date(transaction.transactionDate).toLocaleString()}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionPage;
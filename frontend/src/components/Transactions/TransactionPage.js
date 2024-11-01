
import React from "react";
import transactionData from "../../data/transactionData";
import "./TransactionPage.css"; // Optional: add CSS styling for the page

const TransactionPage = () => {
  return (
    <div className="transaction-page">
      <h1>Transaction History</h1>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Game Title</th>
            <th>Purchase Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.gameTitle}</td>
              <td>{transaction.purchaseDate}</td>
              <td>{transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionPage;

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ stocks }) {
  return (
    <div className="Dashboard">
      <h3>Stocks Dashboard</h3>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Price</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <Link to={`/stocks/${stock.symbol}`}>
                <td>{stock.name}</td>
              </Link>
              <td>{stock.lastPrice}</td>
              <td>{stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

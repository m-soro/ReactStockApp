import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock({ stocks }) {
  const [stock, setStock] = useState("");

  const params = useParams();
  const symbol = params.symbol;

  const getStock = () => {
    for (let stock of stocks) {
      if (stock.symbol === symbol) return stock;
    }
  };

  useEffect(() => {
    setStock(getStock());
  }, []);

  return (
    <div className="Stock">
      <h2>Stock Detail</h2>
      <table role="grid">
        <thead>
          <th scope="col">Stock Attribute</th>
          <th scope="col">Stock Detail</th>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{stock.name}</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>{stock.symbol}</td>
          </tr>

          <tr>
            <td>Last Price</td>
            <td>{stock.lastPrice}</td>
          </tr>
          <tr>
            <td>Change</td>
            <td>{stock.change}</td>
          </tr>
          <tr>
            <td>High</td>
            <td>{stock.high}</td>
          </tr>
          <tr>
            <td>Low</td>
            <td>{stock.low}</td>
          </tr>
          <tr>
            <td>Open</td>
            <td>{stock.open}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

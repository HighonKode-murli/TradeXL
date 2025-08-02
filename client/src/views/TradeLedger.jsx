import StockService from "../../services/StockService.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  dateChanger,
  totalCostFmt,
  formatedPrice,
} from "../utils/FormatFunctions.jsx";
import NavBar from "../components/NavBar.jsx";

const TradeLedger = (props) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    StockService.getAllStocks()
      .then((res) => {
        console.log(res);
        setStocks(Array.isArray(res) ? res : []);
      })
      .catch((err) => {
        console.error("Error fetching stocks:", err);
      });
  }, []);

  const deleteHandler = (idForDeletion) => {
    StockService.deleteOneStock(idForDeletion).then((res) => {
      console.log(res);
      const filteredList = stocks.filter((stock) => {
        return stock._id !== idForDeletion;
      });
      setStocks(filteredList);
    });
  };

  return (
    <div>
      <NavBar />
      <h1>Trade Ledger</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Ticker</th>
              <th>Name</th>
              <th>Buy/Sell</th>
              <th>Price</th>
              <th>Shares</th>
              <th>Total Value</th>
              <th>Shaper</th>
              <th>Tactical</th>
              <th>OPEN</th>
              <th>CLOSE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {stocks
              
              .map((stock) => (
                <tr
                  key={stock._id}
                  className={`${
                    stock.openTrade === true
                      ? "ledgerOpen"
                      : stock.closeTrade === true
                      ? "ledgerClose"
                      : stock.buySell === "buy"
                      ? "ledgerBuy"
                      : "ledgerSell"
                  }`}
                >
                  <td>{dateChanger(stock.date)}</td>
                  <td>{stock.ticker}</td>
                  <td>{stock.name}</td>
                  <td>{stock.buySell}</td>
                  <td>{formatedPrice(stock.price)}</td>
                  <td>{stock.shares}</td>
                  <td>{totalCostFmt(stock.price, stock.shares)}</td>
                  <td>{stock.shaper}</td>
                  <td>{stock.tactical}</td>
                  <td>{stock.openTrade ? "Yes" : ""}</td>
                  <td>{stock.closeTrade ? "Yes" : ""}</td>
                  <td>
                    <button className="editDeleteBtn">
                      <Link className="linkNoDec" to={`/update/${stock._id}`}>
                        EDIT
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      className="editDeleteBtn"
                      onClick={() => deleteHandler(stock._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeLedger;

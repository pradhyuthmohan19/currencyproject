import logo from "./logo.svg";
import "./App.css";
import Price from "./Components/price/Price";
import Chart from "./Components/chart/Chart";
import Summary from "./Components/Summary/Summary";
import Statistics from "./Components/Statistics/Statistics";
import Settings from "./Components/Settings/Settings";
import Analysis from "./Components/Analysis/Analysis";
import CurrencySelect from "./Components/CurrencyComponent/CurrencyComponent";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  let [currentCurrency, setCurrency] = useState("USD");
  function currencyInUSD(value) {
    setCurrency(value);
  }
  return (
    <div className="App">
      <div className="d-flex flex-row justify-content-between">
        <Price currentCurrency={currentCurrency} />
        <CurrencySelect currencyInUSD={currencyInUSD} />
      </div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="Summary">
                  Summary
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Chart
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="Statistics">
                  Statistics
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="Analysis">
                  Analysis
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="Settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/Summary" element={<Summary />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Analysis" element={<Analysis />} />
        <Route path="" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;

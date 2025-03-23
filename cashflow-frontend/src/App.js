import React from "react";
import TransactionForm from "./components/TransactionForm";
import BankForm from "./components/BankForm";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>Cash Flow Minimizer</h1>
      <BankForm />
      <TransactionForm />
    </div>
  );
}

export default App;

"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../styles.module.css"

export default function ResultsPage() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await axios.get("https://cashflow-backend.up.railway.app/api/transactions")
        setTransactions(response.data)
      } catch (error) {
        console.error("Error fetching transactions:", error)
      }
    }
    fetchTransactions()
  }, [])

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsTitle}>Optimized Cash Flow Results</h2>
      <table className={styles.table}>
        <thead>
          <tr><th>Description</th><th>Amount</th><th>Type</th></tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index}>
              <td>{t.description}</td>
              <td>${t.amount}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

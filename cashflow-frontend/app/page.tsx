"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, DollarSign } from "lucide-react"
import styles from "./styles.module.css"

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={styles.container}>
      {!showForm ? (
        <WelcomeScreen onStart={() => setShowForm(true)} />
      ) : (
        <InputForm />
      )}
    </div>
  )
}

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className={styles.welcomeScreen}>
      <DollarSign className={styles.welcomeIcon} />
      <h1 className={styles.welcomeTitle}>Welcome to Cash Flow Minimizer</h1>
      <p className={styles.welcomeSubtitle}>Optimize Transactions Efficiently</p>
      <button onClick={onStart} className={styles.primaryButton}>
        Get Started <ArrowRight className={styles.buttonIcon} />
      </button>
    </div>
  )
}

function InputForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Enter Transactions</h2>
      <input id="description" placeholder="Description" className={styles.input} />
      <input id="amount" type="number" placeholder="Amount" className={styles.input} />
      <Link href="/results" className={styles.primaryButton}>View Results</Link>
    </div>
  )
}

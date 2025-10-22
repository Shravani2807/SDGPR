// src/components/Payment.js

import React, { useState } from "react";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    amount: "",
  });

  const domains = [
    "Urban Equality Program",
    "Green Infrastructure Initiative",
  ];

  // MODIFIED: This function no longer calls the Razorpay API.
  const handlePayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.domain || !formData.amount) {
      alert("Please fill all the fields.");
      return;
    }
    
    // Simulate a successful payment.
    console.log("Simulating payment with data:", formData);
    alert(
      `Payment of ${formData.amount} for ${formData.domain} was successful! (Frontend Only)`
    );
  };

  const qrAmount = formData.amount || "100";
  const upiId = "yourupiid@okaxis"; // This can remain as a placeholder
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=${upiId}&pn=SustainableCity&am=${qrAmount}&cu=INR`;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Participate in Sustainable Development</h2>
      <form onSubmit={handlePayment} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
          required
        />
        <select
          value={formData.domain}
          onChange={(e) =>
            setFormData({ ...formData, domain: e.target.value })
          }
          style={styles.input}
          required
        >
          <option value="">Select a Domain</option>
          {domains.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter Amount (INR)"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Pay with Razorpay
        </button>
      </form>

      <div style={styles.orDivider}>
        <span style={styles.orText}>OR</span>
      </div>

      <div style={styles.qrContainer}>
        <p>Scan the QR to pay directly with UPI</p>
        <img src={qrCodeUrl} alt="UPI QR Code" style={styles.qrCode} />
      </div>
    </div>
  );
};

// Styles remain the same
const styles = {
    container: {
      maxWidth: "500px",
      margin: "40px auto",
      padding: "30px",
      textAlign: "center",
      color: "#333",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e1f5fe",
    },
    heading: {
      color: "#005d7f",
      marginBottom: "25px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #e1f5fe",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#0288d1",
      color: "#fff",
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },
    orDivider: {
      margin: "30px 0",
      textAlign: "center",
      borderBottom: "1px solid #e1f5fe",
      lineHeight: "0.1em",
    },
    orText: {
      background: "#e1f5fe",
      padding: "0 10px",
      color: "#aaa",
    },
    qrContainer: {
      marginTop: "20px",
    },
    qrCode: {
      width: "200px",
      height: "200px",
      marginTop: "10px",
      border: "1px solid #eee",
      borderRadius: "8px",
    },
  };

export default Payment;
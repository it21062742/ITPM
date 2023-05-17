import React, { useState, useRef } from "react";
import LoanJS from "loanjs";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Line } from "react-chartjs-2";
import "./LoanCalculator.css";

import LoanComparison from "./Bank"

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js'; 
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

//var pref =require('./loan.html');

// Create styles for PDF document
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  chartContainer: {
    width: "50%",
    marginRight: "10px",
  },
});

export default function LoanCalculator() {
  const [values, setValues] = useState({
    "loan-amount": 1000,
    "loan-term": 0.5,
    "interest-rate": 3,
  });
  const [installments, setInstallments] = useState([]);
  const pdfRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    calculate(
      values["loan-amount"],
      values["loan-term"],
      values["interest-rate"]
    );
  };

  const calculate = (amount, years, rate) => {
    const loan = new LoanJS.Loan(amount, years * 12, rate);

    setInstallments(loan.installments);
  };

  const amountFormat = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LKR",
    }).format(amount);

  const renderTable = () => (
    <table className="loan-table">
      <thead>
        <tr>
          <th>Month</th>
          <th>Payment Amount</th>
          <th>Interest Paid</th>
          <th>Principal Paid</th>
          <th>Remain</th>
        </tr>
      </thead>
      <tbody>
        {installments.map((i, ind) => (
          <tr key={ind}>
            <td>{ind}</td>
            <td>{amountFormat(i.installment)}</td>
            <td>{amountFormat(i.interest)}</td>
            <td>{amountFormat(i.capital)}</td>
            <td>{amountFormat(i.remain)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderPDFTable = () => (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>Month</Text>
        <Text style={styles.tableCell}>Payment Amount</Text>
        <Text style={styles.tableCell}>Interest Paid</Text>
        <Text style={styles.tableCell}>Principal Paid</Text>
        <Text style={styles.tableCell}>Remain</Text>
      </View>
      {installments.map((i, ind) => (
        <View key={ind} style={styles.tableRow}>
          <Text style={styles.tableCell}>{ind}</Text>
          <Text style={styles.tableCell}>{amountFormat(i.installment)}</Text>
          <Text style={styles.tableCell}>{amountFormat(i.interest)}</Text>
          <Text style={styles.tableCell}>{amountFormat(i.capital)}</Text>
          <Text style={styles.tableCell}>{amountFormat(i.remain)}</Text>
        </View>
      ))}
    </View>
  );

  // graph
  const cumulativePrincipalData = installments.reduce((acc, i) => {
    const previousPrincipal = acc.length > 0 ? acc[acc.length - 1] : 0;
    const cumulativePrincipal = previousPrincipal + i.capital;
    return [...acc, cumulativePrincipal];
  }, []);
  const totalRemainingData = installments.map((i) => i.remain);
  
  
  const chartData = {
    labels: Array.from({ length: installments.length }, (_, i) => i),
    datasets: [
      {
        label: "Total Remaining Amount",
        data: totalRemainingData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderDash: [5, 5],
        borderWidth: 5, // Make the bar line thicker
      },
      {
        label: "Cumulative Principal",
        data: cumulativePrincipalData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderDash: [5, 5],
        borderWidth: 5, // Make the bar line thicker
      },
    ],
  };
  
  const chartOptions = {
    responsive: true, // Make the graph responsive
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips on hover
        callbacks: {
          label: (context) => amountFormat(context.raw), // Format tooltip label
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => amountFormat(value),
        },
      },
    },
  };
    

  return (
    <div className="loan-calculator-container">
      <h1>Loan Calculator</h1>

      <div className="flex-container">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="loan-amount">Loan Amount</label>
          <div className="form-input">
            <input
              type="number"
              name="loan-amount"
              placeholder="0"
              value={values["loan-amount"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="interest-rate">Interest Rate</label>
          <div className="form-input">
            <input
              type="number"
              name="interest-rate"
              placeholder="0"
              value={values["interest-rate"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="loan-term">Loan Term (Years)</label>
          <div className="form-input">
            <input
              type="number"
              name="loan-term"
              placeholder="0"
              value={values["loan-term"]}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-action">
          <input
            type="submit"
            value="Calculate"
            className="calculate-button"
          ></input>
        </div>
      </form>
      {installments.length > 0 && (
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>
        )}
      </div>
      {installments.length > 0 && (
        <>
         <div className="loan-download-container">
          <PDFDownloadLink
            document={
              <Document>
                <Page size="A4" style={styles.page}>
                  <Text style={styles.header}>Loan Installments</Text>
                  <View style={styles.chartContainer}>
                    <Line data={chartData} options={chartOptions} />
                  </View>
                  {renderPDFTable()}
                </Page>
              </Document>
            }
            fileName="loan_installments.pdf"
            ref={pdfRef}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
          </div>
          {renderTable()}
         
        </>
      )}
      {/* <div className="external-html-container">
        <iframe src="./loan.html" width="100%" height="auto"  title="External HTML" />
      </div> */}
      {/* <iframe src={pref}></iframe> */}
  {/* <div className="external-html-container" dangerouslySetInnerHTML={{ pref }} />   */}
      {<LoanComparison />}
    </div>

  );
}

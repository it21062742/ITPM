import "./LoanCalculator.css";
import LoanJS from "loanjs";
import { useState } from "react";

export default function LoanCal() {
  const [values, setValues] = useState({
    "loan-amount": 0,
    "loan-term": 0,
    "interest-rate": 0,
  });
  const [installments, setInstallments] = useState([]);

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

   const handleDownload = () => {
    const csvContent = installments
      .map((i, ind) => [
        ind,
        amountFormat(i.installment),
        amountFormat(i.interest),
        amountFormat(i.capital),
        amountFormat(i.remain),
      ])
      .join("\n")
      .replace(/,/g, "\t");

    const downloadLink = document.createElement("a");
    downloadLink.href = "data:text/csv;charset=utf-8," + encodeURI(csvContent);
    downloadLink.download = "installments.csv";
    downloadLink.click();
  };

  return (
    <div className="loan-calculator-container">
      <h1>Loan Calculator</h1>

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

      {installments.length && (
        <div>
          <button onClick={handleDownload}>Download Table</button>
        <table>
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
      </div>
      )}
    </div>
  );
}

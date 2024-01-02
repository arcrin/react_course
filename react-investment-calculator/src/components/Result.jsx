import {formatter} from '../util/investment.js'

export default function Result({initialInvestment, result}) {
  let totalInterest = 0;
  let totalInvestedCapital = initialInvestment;
  function updateTotalInterest(interest) {
    totalInterest += interest;
    return totalInterest;
  }
  function updateTotalInvestedCapital(annualInvestment) {
    totalInvestedCapital += annualInvestment;
    return totalInvestedCapital;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((resultEntry) => {
          return (
            <tr key={resultEntry.year}>
              <td>{resultEntry.year}</td>
              <td>{formatter.format(resultEntry.valueEndOfYear)}</td>
              <td>{formatter.format(resultEntry.interest)}</td>
              <td>{formatter.format(updateTotalInterest(resultEntry.interest))}</td>
              <td>{formatter.format(updateTotalInvestedCapital(resultEntry.annualInvestment))}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

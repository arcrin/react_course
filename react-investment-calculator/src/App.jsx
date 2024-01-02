import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  console.log(`initialInvestment: ${initialInvestment}\n
  annualInvestment: ${annualInvestment}\n
  expectedReturn: ${expectedReturn}\n
  duration: ${duration}\n`);

  function onValueChange(event) {
    if (event.target.id === "initial-investment") {
      setInitialInvestment(event.target.value);
    } else if (event.target.id === "annual-investment") {
      setAnnualInvestment(event.target.value);
    } else if (event.target.id === "expected-return") {
      setExpectedReturn(event.target.value);
    } else if (event.target.id === "duration") {
      setDuration(event.target.value);
    }
  }
  console.log(
    calculateInvestmentResults({
      initialInvestment: Number(initialInvestment),
      annualInvestment: Number(annualInvestment),
      expectedReturn: Number(expectedReturn),
      duration: Number(duration),
    })
  );

  return (
    <>
      <Header />
      <UserInput onValueChange={onValueChange} />
      <Result
        initialInvestment={Number(initialInvestment)}
        result={calculateInvestmentResults({
          initialInvestment: Number(initialInvestment),
          annualInvestment: Number(annualInvestment),
          expectedReturn: Number(expectedReturn),
          duration: Number(duration),
        })}
      />
    </>
  );
}

export default App;

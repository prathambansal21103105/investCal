import React, { useState } from 'react';
import InvestForm from './Components/InvestForm';
import Header from './Components/Header';
import ResultTable from './Components/ResultTable';
import logo from './assets/investment-calculator-logo.png';
const data1=[];
function App() {
  const[yearlyData,setYearlyData]=useState(data1);
  const[showTable,setShowTable]=useState(false);
  const calculateHandler = (userInput) => {
    setShowTable(true);
    userInput.preventDefault();
    console.log("submitted!");

    let currentSavings = Number(userInput.target[0].value); 
    const yearlyContribution = Number(userInput.target[1].value) 
    const expectedReturn = Number(userInput.target[2].value) / 100;
    const duration = Number(userInput.target[3].value);
    const arr=[];
    let prev=0;
    let val1=currentSavings+yearlyContribution;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      prev+=yearlyInterest;
      const val={
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: val1,
        prev:prev
      };
      val1+=yearlyContribution;
      arr.push(val);
    }
    setYearlyData(arr);
  };

  return (
    <div>
      <Header logo={logo}/>
      <InvestForm submitHandler={calculateHandler}/>
      {showTable && ( (yearlyData.length>0)? <ResultTable data={yearlyData}/> : <div style={{textAlign:'center'}} >No Data Available!</div>)}

    </div>
  );
}

export default App;
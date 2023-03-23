import React from 'react';

const Results = ({ results, submittedCheckedLoans }) => {
  const netIncome = (
    results.submittedIncome -
    results.incomeTax -
    results.niTax -
    (submittedCheckedLoans.planOne ? results.studentTaxOne : 0) -
    (submittedCheckedLoans.planTwo ? results.studentTaxTwo : 0) -
    (submittedCheckedLoans.pgLoan ? results.pgLoan : 0) -
    (submittedCheckedLoans.pension ? results.pension : 0)
  ).toFixed(2);
  return (
    <div>
      {results.submittedIncome !== null && (
        <div>
          <p>Your net income is: £{netIncome} </p>
          <p>Income Tax: £{results.incomeTax} </p>
          <p>NI Tax: £{results.niTax} </p>
          {submittedCheckedLoans.planOne && results.studentTaxOne ? (
            <p>Student loan 1: £{results.studentTaxOne}</p>
          ) : null}
          {submittedCheckedLoans.planTwo && results.studentTaxTwo ? (
            <p>Student loan 2: £{results.studentTaxTwo}</p>
          ) : null}
          {submittedCheckedLoans.pgLoan && results.pgLoan ? (
            <p>
              Postgraduate loan: £{results.pgLoan} <br />
            </p>
          ) : null}
          {submittedCheckedLoans.pension && results.pension ? (
            <p>Pension: £{results.pension}</p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Results;

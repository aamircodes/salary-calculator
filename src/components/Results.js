import React from 'react';

const Results = ({ results, submittedCheckedLoans }) => {
  const netIncome =
    results.submittedIncome -
    results.incomeTax -
    results.niTax -
    (submittedCheckedLoans.planOne ? results.studentTaxOne : 0) -
    (submittedCheckedLoans.planTwo ? results.studentTaxTwo : 0) -
    (submittedCheckedLoans.pgLoan ? results.pgLoan : 0) -
    (submittedCheckedLoans.pension ? results.pension : 0);

  const monthlyIncome = (results.submittedIncome / 12).toFixed(2);
  const monthlyPension = (results.pension / 12).toFixed(2);
  const monthlyIncomeTax = (results.incomeTax / 12).toFixed(2);
  const monthlyNiTax = (results.niTax / 12).toFixed(2);
  const monthlyStudentTaxOne = (
    submittedCheckedLoans.planOne ? results.studentTaxOne / 12 : 0
  ).toFixed(2);
  const monthlyStudentTaxTwo = (
    submittedCheckedLoans.planTwo ? results.studentTaxTwo / 12 : 0
  ).toFixed(2);
  const monthlyPgLoan = (
    submittedCheckedLoans.pgLoan ? results.pgLoan / 12 : 0
  ).toFixed(2);
  const monthlyNetIncome = (netIncome / 12).toFixed(2);

  const weeklyIncome = (results.submittedIncome / 52).toFixed(2);
  const weeklyPension = (results.pension / 52).toFixed(2);
  const weeklyIncomeTax = (results.incomeTax / 52).toFixed(2);
  const weeklyNiTax = (results.niTax / 52).toFixed(2);
  const weeklyStudentTaxOne = (
    submittedCheckedLoans.planOne ? results.studentTaxOne / 52 : 0
  ).toFixed(2);
  const weeklyStudentTaxTwo = (
    submittedCheckedLoans.planTwo ? results.studentTaxTwo / 52 : 0
  ).toFixed(2);
  const weeklyPgLoan = (
    submittedCheckedLoans.pgLoan ? results.pgLoan / 52 : 0
  ).toFixed(2);
  const weeklyNetIncome = (netIncome / 52).toFixed(2);
  const dailyIncome = (results.submittedIncome / 52 / 5).toFixed(2);
  const dailyPension = (results.pension / 52 / 5).toFixed(2);
  const dailyIncomeTax = (results.incomeTax / 52 / 5).toFixed(2);
  const dailyNiTax = (results.niTax / 52 / 5).toFixed(2);
  const dailyStudentTaxOne = (
    submittedCheckedLoans.planOne ? results.studentTaxOne / 52 / 5 : 0
  ).toFixed(2);
  const dailyStudentTaxTwo = (
    submittedCheckedLoans.planTwo ? results.studentTaxTwo / 52 / 5 : 0
  ).toFixed(2);
  const dailyPgLoan = (
    submittedCheckedLoans.pgLoan ? results.pgLoan / 52 / 5 : 0
  ).toFixed(2);
  const dailyNetIncome = (netIncome / 52 / 5).toFixed(2);

  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Yearly</th>
            <th>Monthly</th>
            <th>Weekly</th>
            <th>Daily</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gross Income</th>
            <td>{results.submittedIncome}</td>
            <td>{monthlyIncome}</td>
            <td>{weeklyIncome}</td>
            <td>{dailyIncome}</td>
          </tr>
          {results.pension ? (
            <tr>
              <th>Pension Deductions</th>
              <td>{results.pension}</td>
              <td>{monthlyPension}</td>
              <td>{weeklyPension}</td>
              <td>{dailyPension}</td>
            </tr>
          ) : (
            ''
          )}
          <tr>
            <th>Income Tax</th>
            <td>{results.incomeTax}</td>
            <td>{monthlyIncomeTax}</td>
            <td>{weeklyIncomeTax}</td>
            <td>{dailyIncomeTax}</td>
          </tr>
          <tr>
            <th>National Insurance</th>
            <td>{results.niTax}</td>
            <td>{monthlyNiTax}</td>
            <td>{weeklyNiTax}</td>
            <td>{dailyNiTax}</td>
          </tr>
          {submittedCheckedLoans.planOne ? (
            <tr>
              <th>Student Loan Plan 1</th>
              <td>{results.studentTaxOne}</td>
              <td>{monthlyStudentTaxOne}</td>
              <td>{weeklyStudentTaxOne}</td>
              <td>{dailyStudentTaxOne}</td>
            </tr>
          ) : (
            ''
          )}

          {submittedCheckedLoans.planTwo ? (
            <tr>
              <th>Student Loan Plan 2</th>
              <td>{results.studentTaxTwo}</td>
              <td>{monthlyStudentTaxTwo}</td>
              <td>{weeklyStudentTaxTwo}</td>
              <td>{dailyStudentTaxTwo}</td>
            </tr>
          ) : (
            ''
          )}

          {submittedCheckedLoans.pgLoan ? (
            <tr>
              <th>Postgraduate Loan</th>
              <td>{results.pgLoan}</td>
              <td>{monthlyPgLoan}</td>
              <td>{weeklyPgLoan}</td>
              <td>{dailyPgLoan}</td>
            </tr>
          ) : (
            ''
          )}
          <tr>
            <th>Net income</th>
            <td>{netIncome}</td>
            <td>{monthlyNetIncome}</td>
            <td>{weeklyNetIncome}</td>
            <td>{dailyNetIncome}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;

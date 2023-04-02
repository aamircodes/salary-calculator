const Results = ({ results, submittedCheckedLoans }) => {
  const netIncome =
    results.submittedIncome -
    results.incomeTax -
    results.niTax -
    (submittedCheckedLoans.planOne ? results.studentTaxOne : 0) -
    (submittedCheckedLoans.planTwo ? results.studentTaxTwo : 0) -
    (submittedCheckedLoans.pgLoan ? results.pgLoan : 0) -
    (submittedCheckedLoans.pension ? results.pension : 0);

  const createRows = (label, key) => {
    const yearly = results[key];
    const monthly = yearly / 12;
    const weekly = yearly / 52;
    const daily = yearly / 52 / 5;

    return (
      <tr>
        <th>{label}</th>
        <td>{formatCurrency(monthly)}</td>
        <td>{formatCurrency(weekly)}</td>
        <td>{formatCurrency(yearly)}</td>
        <td>{formatCurrency(daily)}</td>
      </tr>
    );
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

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
          {createRows('Gross Income', 'submittedIncome')}
          {results.pension && createRows('Pension Deductions', 'pension')}
          {createRows('Income Tax', 'incomeTax')}
          {createRows('National Insurance', 'niTax')}
          {submittedCheckedLoans.planOne &&
            createRows('Student Loan 1', 'studentTaxOne')}
          {submittedCheckedLoans.planTwo &&
            createRows('Student Loan 2', 'studentTaxTwo')}
          {submittedCheckedLoans.pgLoan &&
            createRows('Postgraduate Loan', 'pgLoan')}
          <tr>
            <th>Net income</th>
            <td className='font-bold'>{formatCurrency(netIncome)}</td>
            <td className='font-bold'>{formatCurrency(netIncome / 12)}</td>
            <td className='font-bold'>{formatCurrency(netIncome / 52)}</td>
            <td className='font-bold'>{formatCurrency(netIncome / 12 / 5)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;

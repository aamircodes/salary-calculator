const Table = ({
  grossIncome,
  taxableIncome,
  incomeTax,
  pensionDeductions,
  niTax,
  plan1Loan,
  plan2Loan,
  pgLoan,
  takehome,
}) => {
  return (
    <div className='flex flex-col gap-2 p-3 bg-green-50'>
      <div>Gross income: {grossIncome}</div>
      <div>Pension Deductions: {pensionDeductions}</div>
      <div>Taxable income: {taxableIncome}</div>
      <div>Income Tax: {incomeTax}</div>
      <div>National Insurance: {niTax}</div>
      <div>Student Loan 1: {plan1Loan}</div>
      <div>Student Loan 2: {plan2Loan}</div>
      <div>Postgraduate Loan 1: {pgLoan}</div>
      <div>2023 take home: {takehome}</div>
    </div>
  );
};

export default Table;

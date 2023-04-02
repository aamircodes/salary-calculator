const Table = ({
  grossIncome,
  taxableIncome,
  incomeTax,
  pensionDeductions,
}) => {
  return (
    <div className='flex flex-col gap-2 p-3 border-2 border-orange-500 w-full h-full'>
      <div>Gross income: {grossIncome}</div>
      <div>Taxable income: {taxableIncome}</div>
      <div>Income Tax: {incomeTax}</div>
      <div>Pension Deductions: {pensionDeductions}</div>
      <div>National Insurance: </div>
      <div>Student Loan 1: </div>
      <div>Student Loan 2: </div>
      <div>Postgraduate Loan 1: </div>
      <div>2023 take home: </div>
    </div>
  );
};

export default Table;

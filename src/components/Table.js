import { formatCurrency } from '../utils/currencyUtils';

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
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className='rounded-lg bg-base-200 my-2'>
        <h2 className='flex justify-center text-2xl font-bold pt-3'>
          Your results
        </h2>
        <div className='overflow-x-auto py-4 px-1'>
          <table className='table table-zebra w-full'>
            <thead>
              <tr>
                <th></th>
                <th className='bg-primary'>Year</th>
                <th>Month</th>
                <th>Week</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Gross income</th>
                <td>{formatCurrency(grossIncome)}</td>
                <td>{formatCurrency(grossIncome / 12)}</td>
                <td>{formatCurrency(grossIncome / 52)}</td>
                <td>{formatCurrency(grossIncome / 52 / 5)}</td>
              </tr>
              <tr>
                <th>Pension Deductions </th>
                <td>{formatCurrency(pensionDeductions)}</td>
                <td>{formatCurrency(pensionDeductions / 12)}</td>
                <td>{formatCurrency(pensionDeductions / 52)}</td>
                <td>{formatCurrency(pensionDeductions / 52 / 5)}</td>
              </tr>
              <tr>
                <th>Taxable income </th>
                <td>{formatCurrency(taxableIncome)}</td>
                <td>{formatCurrency(taxableIncome / 12)}</td>
                <td>{formatCurrency(taxableIncome / 52)}</td>
                <td>{formatCurrency(taxableIncome / 52 / 5)}</td>
              </tr>
              <tr>
                <th>Income Tax </th>
                <td>{formatCurrency(incomeTax)}</td>
                <td>{formatCurrency(incomeTax / 12)}</td>
                <td>{formatCurrency(incomeTax / 52)}</td>
                <td>{formatCurrency(incomeTax / 52 / 5)}</td>
              </tr>
              <tr>
                <th>National Insurance </th>
                <td>{formatCurrency(niTax)}</td>
                <td>{formatCurrency(niTax / 12)}</td>
                <td>{formatCurrency(niTax / 52)}</td>
                <td>{formatCurrency(niTax / 52 / 5)}</td>
              </tr>
              {plan1Loan && (
                <tr>
                  <th>Student Loan 1</th>
                  <td>{formatCurrency(plan1Loan)}</td>
                  <td>{formatCurrency(plan1Loan / 12)}</td>
                  <td>{formatCurrency(plan1Loan / 52)}</td>
                  <td>{formatCurrency(plan1Loan / 52 / 5)}</td>
                </tr>
              )}
              {plan2Loan && (
                <tr>
                  <th>Student Loan 2 </th>
                  <td>{formatCurrency(plan2Loan)}</td>
                  <td>{formatCurrency(plan2Loan / 12)}</td>
                  <td>{formatCurrency(plan2Loan / 52)}</td>
                  <td>{formatCurrency(plan2Loan / 52 / 5)}</td>
                </tr>
              )}
              {pgLoan && (
                <tr>
                  <th>Postgraduate Loan</th>
                  <td>{formatCurrency(pgLoan)}</td>
                  <td>{formatCurrency(pgLoan / 12)}</td>
                  <td>{formatCurrency(pgLoan / 52)}</td>
                  <td>{formatCurrency(pgLoan / 52 / 5)}</td>
                </tr>
              )}
              <tr>
                <th>2023 take home </th>
                <td>{formatCurrency(takehome)}</td>
                <td>{formatCurrency(takehome / 12)}</td>
                <td>{formatCurrency(takehome / 52)}</td>
                <td>{formatCurrency(takehome / 52 / 5)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

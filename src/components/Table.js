import { formatCurrency } from '../utils/currencyUtils';

const Table = ({
  grossIncome,
  taxableIncome,
  incomeTax,
  pensionDeductions,
  niTax,
  planOneLoan,
  plan2Loan,
  pgLoan,
  takehome,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className='rounded-lg bg-base-300 shadow-md'>
        <h2 className='flex justify-center text-2xl font-bold pt-4'>
          Your Results
        </h2>
        <div className='overflow-x-auto py-4 px-4'>
          <table className='table table-zebra w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Year</th>
                <th>Month</th>
                <th>Week</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              <tr className='font-medium'>
                <th className='font-medium'>Gross Income</th>
                <td>{formatCurrency(grossIncome)}</td>
                <td>{formatCurrency(grossIncome / 12)}</td>
                <td>{formatCurrency(grossIncome / 52)}</td>
                <td>{formatCurrency(grossIncome / 52 / 5)}</td>
              </tr>
              <tr>
                <th className='font-medium'>Pension Deductions</th>
                <td>{formatCurrency(pensionDeductions)}</td>
                <td>{formatCurrency(pensionDeductions / 12)}</td>
                <td>{formatCurrency(pensionDeductions / 52)}</td>
                <td>{formatCurrency(pensionDeductions / 52 / 5)}</td>
              </tr>
              <tr>
                <th className='font-medium'>Taxable Income</th>
                <td>{formatCurrency(taxableIncome)}</td>
                <td>{formatCurrency(taxableIncome / 12)}</td>
                <td>{formatCurrency(taxableIncome / 52)}</td>
                <td>{formatCurrency(taxableIncome / 52 / 5)}</td>
              </tr>
              <tr>
                <th className='font-medium'>Income Tax</th>
                <td>{formatCurrency(incomeTax)}</td>
                <td>{formatCurrency(incomeTax / 12)}</td>
                <td>{formatCurrency(incomeTax / 52)}</td>
                <td>{formatCurrency(incomeTax / 52 / 5)}</td>
              </tr>
              <tr>
                <th className='font-medium'>National Insurance</th>
                <td>{formatCurrency(niTax)}</td>
                <td>{formatCurrency(niTax / 12)}</td>
                <td>{formatCurrency(niTax / 52)}</td>
                <td>{formatCurrency(niTax / 52 / 5)}</td>
              </tr>
              {planOneLoan > 0 && (
                <tr>
                  <th className='font-medium'>Student Loan 1</th>
                  <td>{formatCurrency(planOneLoan * 12)}</td>
                  <td>{formatCurrency(planOneLoan)}</td>
                  <td>{formatCurrency(planOneLoan / 52)}</td>
                  <td>{formatCurrency(planOneLoan / 52 / 5)}</td>
                </tr>
              )}
              {plan2Loan > 0 && (
                <tr>
                  <th className='font-medium'>Student Loan 2</th>
                  <td>{formatCurrency(plan2Loan * 12)}</td>
                  <td>{formatCurrency(plan2Loan)}</td>
                  <td>{formatCurrency((plan2Loan * 12) / 52)}</td>
                  <td>{formatCurrency((plan2Loan * 12) / 52 / 5)}</td>
                </tr>
              )}
              {pgLoan > 0 && (
                <tr>
                  <th className='font-medium'>Postgraduate Loan</th>
                  <td>{formatCurrency(pgLoan * 12)}</td>
                  <td>{formatCurrency(pgLoan)}</td>
                  <td>{formatCurrency((pgLoan * 12) / 52)}</td>
                  <td>{formatCurrency((pgLoan * 12) / 52 / 5)}</td>
                </tr>
              )}
              <tr className='font-semibold'>
                <th>23/24 Take Home</th>
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

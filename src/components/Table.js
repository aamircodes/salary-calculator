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
      <div className='rounded-lg bg-base-300 my-2'>
        <h2 className='flex justify-center text-2xl font-bold pt-3'>
          Your results
        </h2>
        <div className='overflow-x-auto py-4 px-1'>
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
              <tr>
                <th>Gross income</th>
                <td> {grossIncome}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Pension Deductions </th>
                <td>{pensionDeductions}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Taxable income </th>
                <td>{taxableIncome}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Income Tax </th>
                <td>{incomeTax}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>National Insurance </th>
                <td>{niTax}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Student Loan 1 </th>
                <td>{plan1Loan}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Student Loan 2 </th>
                <td>{plan2Loan}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Postgraduate Loan</th>
                <td>{pgLoan}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>2023 take home </th>
                <td>{takehome}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

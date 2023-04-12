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
    <div className='overflow-x-auto m-2'>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th className='bg-secondary-focus'></th>
            <th className='bg-secondary-focus'> Year </th>
            <th className='bg-secondary-focus'> Month </th>
            <th className='bg-secondary-focus'> Week </th>
            <th className='bg-secondary-focus'> Day </th>
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
            <th className='bg-secondary-focus'>2023 take home </th>
            <td className='bg-secondary-focus'>{takehome}</td>
            <td className='bg-secondary-focus'></td>
            <td className='bg-secondary-focus'></td>
            <td className='bg-secondary-focus'> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

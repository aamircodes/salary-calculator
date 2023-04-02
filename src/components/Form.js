import { useState } from 'react';
import {
  calculateGrossIncome,
  calculateIncomeTax,
  calculatePensionDeductions,
  calculateTaxableIncome,
  calculateNiTax,
  calculatePlanOneLoan,
  calculatePlanTwoLoan,
  calculatePgLoan,
  calculateTakehome,
} from '../utils/taxUtils';

const Form = ({
  setGrossIncome,
  setTaxableIncome,
  setIncomeTax,
  setPensionDeductions,
  setNiTax,
  setPlan1Loan,
  setPlan2Loan,
  setPgLoan,
  setTakehome,
}) => {
  const [salary, setSalary] = useState('');
  const [pensionRate, setPensionRate] = useState('');
  const [isPlanOneChecked, setIsPlanOneChecked] = useState(false);
  const [isPlanTwoChecked, setIsPlanTwoChecked] = useState(false);
  const [isPgChecked, isSetPgChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pensionPercentageDivided = pensionRate / 100;
    const grossIncome = calculateGrossIncome(salary);
    const taxableIncome = calculateTaxableIncome(
      salary,
      pensionPercentageDivided
    );
    const incomeTax = calculateIncomeTax(salary, pensionPercentageDivided);
    const pensionDeductions = calculatePensionDeductions(
      salary,
      pensionPercentageDivided
    );
    const niTax = calculateNiTax(salary);

    const plan1Loan = isPlanOneChecked
      ? calculatePlanOneLoan(salary, pensionRate / 100, isPlanTwoChecked)
      : '';
    const plan2Loan = isPlanTwoChecked ? calculatePlanTwoLoan(salary) : '';
    const pgLoan = isPgChecked ? calculatePgLoan(salary) : '';
    const takehome = calculateTakehome(
      salary,
      pensionRate / 100,
      isPlanOneChecked
    );

    setGrossIncome(grossIncome);
    setTaxableIncome(taxableIncome);
    setIncomeTax(incomeTax);
    setPensionDeductions(pensionDeductions);
    setNiTax(niTax);
    setPlan1Loan(plan1Loan);
    setPlan2Loan(plan2Loan);
    setPgLoan(pgLoan);
    setTakehome(takehome);
  };

  return (
    <div className='p-3 border-2 border-green-500 max-w-sm'>
      <h1 className='text-2xl font-bold mb-4'>Take home calculator</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label className='text-lg font-semibold cursor-pointer'>
            <span className='label-text mr-2'>Salary {`\u00A3`}</span>
            <input
              className='input input-bordered max-w-xs font-normal'
              type='number'
              step='0.01'
              min='0.01'
              placeholder='e.g. 10,000'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </label>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-lg font-semibold cursor-pointer'>
            <span className='label-text mr-2'>Pension {`\u0025`}</span>
            {/* add validation */}
            <input
              className='input input-bordered max-w-xs font-normal'
              type='text'
              step='0.1'
              min='0.0'
              placeholder='5.0'
              value={pensionRate}
              onChange={(e) => setPensionRate(e.target.value)}
            />
          </label>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-lg font-semibold cursor-pointer'>
            <span className='label-text'>Student loans</span>
            <div className='flex flex-row gap-4'>
              <label className='label cursor-pointer'>
                <span className='label-text mr-2'>plan 1</span>
                <input
                  type='checkbox'
                  checked={isPlanOneChecked}
                  onChange={() => setIsPlanOneChecked(!isPlanOneChecked)}
                  className='checkbox'
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text mr-2'>plan 2</span>
                <input
                  type='checkbox'
                  checked={isPlanTwoChecked}
                  onChange={() => setIsPlanTwoChecked(!isPlanTwoChecked)}
                  className='checkbox'
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text mr-2'>postgraduate loan</span>
                <input
                  type='checkbox'
                  checked={isPgChecked}
                  onChange={() => isSetPgChecked(!isPgChecked)}
                  className='checkbox'
                />
              </label>
            </div>
          </label>
        </div>
        <button className='btn w-full max-w-xs' type='submit'>
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Form;

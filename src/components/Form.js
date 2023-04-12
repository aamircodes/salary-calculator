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
      ? calculatePlanOneLoan(salary, isPlanTwoChecked)
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
    <div className=' bg-primary-content rounded-lg my-8 p-8 shadow-md'>
      <form className='flex flex-col space-y-6' onSubmit={handleSubmit}>
        <div className='flex flex-row'>
          <label className='text-3xl font-semibold mb-2 block text-primary-700'>
            Your annual salary £
          </label>
          <input
            type='number'
            placeholder='Type here'
            className='input input-md input-bordered w-full max-w-xs'
            step='0.01'
            min='0.01'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className='flex flex-row'>
          <label className='text-2xl font-semibold mb-2 block text-primary-700'>
            Pension contributions %
          </label>
          <input
            className='input input-bordered w-full max-w-xs'
            type='text'
            step='0.1'
            min='0.0'
            placeholder='5%'
            value={pensionRate}
            onChange={(e) => setPensionRate(e.target.value)}
          />
        </div>
        <div className=''>
          <label className='text-2xl font-semibold mb-2 block text-primary-700'>
            Student loans
          </label>
          <div className='flex items-center space-x-4'>
            <label className='label cursor-pointer font-medium text-lg'>
              Plan 1
              <input
                type='checkbox'
                checked={isPlanOneChecked}
                onChange={() => setIsPlanOneChecked(!isPlanOneChecked)}
                className='checkbox'
              />
            </label>
            <label className='label cursor-pointer font-medium text-lg'>
              Plan 2
              <input
                type='checkbox'
                checked={isPlanTwoChecked}
                onChange={() => setIsPlanTwoChecked(!isPlanTwoChecked)}
                className='checkbox'
              />
            </label>
            <label className='label cursor-pointer font-medium text-lg'>
              Postgraduate Loan
              <input
                type='checkbox'
                checked={isPgChecked}
                onChange={() => isSetPgChecked(!isPgChecked)}
                className='checkbox'
              />
            </label>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='btn btn-primary w-full max-w-xs' type='submit'>
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

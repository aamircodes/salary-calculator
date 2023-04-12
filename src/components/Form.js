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
    <div className='bg-primary-content rounded-lg shadow-md p-4'>
      <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
        <div className='grid gap-4 grid-cols-2 grid-rows-3 place-items-start p-4'>
          <label className='text-2xl font-semibold block text-primary-700'>
            Your annual salary £
          </label>
          <input
            type='number'
            placeholder='Type here'
            className='input input-md leading-10 h-10 text-sm input-bordered w-full max-w-xs'
            step='0.01'
            min='0.01'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <label className='text-2xl font-semibold block text-primary-700'>
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
          <div>
            <div className='flex items-center space-x-4 col-span-2'>
              <label className='text-2xl font-semibold mb-2 block text-primary-700'>
                Student loans
              </label>
              <label className='label cursor-pointer font-medium text-lg'>
                Plan 1
                <input
                  type='checkbox'
                  checked={isPlanOneChecked}
                  onChange={() => setIsPlanOneChecked(!isPlanOneChecked)}
                  className='checkbox checkbox-primary h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer font-medium text-lg'>
                Plan 2
                <input
                  type='checkbox'
                  checked={isPlanTwoChecked}
                  onChange={() => setIsPlanTwoChecked(!isPlanTwoChecked)}
                  className='checkbox checkbox-primary h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer font-medium text-lg'>
                Postgraduate Loan
                <input
                  type='checkbox'
                  checked={isPgChecked}
                  onChange={() => isSetPgChecked(!isPgChecked)}
                  className='checkbox checkbox-primary h-5 w-5 ml-1'
                />
              </label>
            </div>
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

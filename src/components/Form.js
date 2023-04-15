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
  className,
}) => {
  const [salary, setSalary] = useState('');
  const [pensionRate, setPensionRate] = useState('');
  const [isPlanOneChecked, setIsPlanOneChecked] = useState(false);
  const [isPlanTwoChecked, setIsPlanTwoChecked] = useState(false);
  const [isPgChecked, setIsPgChecked] = useState(false);

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
    <div className={`${className}`}>
      <section className='bg-base-200 rounded-lg shadow-md p-4 sm:p-6 mx-1 sm:mx-2'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-1 items-center justify-center'>
            <label className='text-lg sm:text-xl md:text-2xl font-semibold text-primary-700  text-center md:text-start'>
              Your annual salary £
            </label>
            <input
              type='number'
              placeholder='0'
              className='input input-md leading-10 h-10 text-sm input-bordered  md:w-1/2 mx-auto md:mx-0'
              step='0.01'
              min='0'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <label className='text-lg sm:text-xl md:text-2xl font-semibold text-primary-700  text-center md:text-start'>
              Pension contributions %
            </label>
            <input
              className='input input-md leading-10 h-10 text-sm input-bordered  md:w-1/2 mx-auto md:mx-0'
              type='number'
              step='0.01'
              min='0'
              placeholder='0'
              value={pensionRate}
              onChange={(e) => setPensionRate(e.target.value)}
            />
            <label className='text-lg sm:text-xl md:text-2xl font-semibold text-primary-700  text-center md:text-start'>
              Student loans
            </label>
            <div className='flex flex-row space-x-2 justify-center md:justify-start'>
              <label className='label cursor-pointer font-medium '>
                Plan 1
                <input
                  type='checkbox'
                  checked={isPlanOneChecked}
                  onChange={() => setIsPlanOneChecked(!isPlanOneChecked)}
                  className='checkbox h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer font-medium'>
                Plan 2
                <input
                  type='checkbox'
                  checked={isPlanTwoChecked}
                  onChange={() => setIsPlanTwoChecked(!isPlanTwoChecked)}
                  className='checkbox h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer font-medium'>
                Postgraduate Loan
                <input
                  type='checkbox'
                  checked={isPgChecked}
                  onChange={() => setIsPgChecked(!isPgChecked)}
                  className='checkbox h-5 w-5 ml-1'
                />
              </label>
            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <button className='btn btn-primary w-full max-w-xs' type='submit'>
              Calculate
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;

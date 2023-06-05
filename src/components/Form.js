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
  setPlanOneLoan,
  setPlan2Loan,
  setPgLoan,
  setTakehome,
  className,
  scrollDown,
}) => {
  const [salary, setSalary] = useState('');
  const [pensionRate, setPensionRate] = useState('');
  const [isPlanOneChecked, setIsPlanOneChecked] = useState(false);
  const [isPlanTwoChecked, setIsPlanTwoChecked] = useState(false);
  const [isPgChecked, setIsPgChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (salary > 0 && pensionRate >= 0) {
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

      const planOneLoan = isPlanOneChecked
        ? calculatePlanOneLoan(salary, isPlanTwoChecked)
        : '';
      const plan2Loan = isPlanTwoChecked ? calculatePlanTwoLoan(salary) : '';
      const pgLoan = isPgChecked ? calculatePgLoan(salary) : '';
      const takehome = calculateTakehome(
        salary,
        pensionPercentageDivided,
        isPlanOneChecked,
        isPlanTwoChecked,
        isPgChecked
      );

      setGrossIncome(grossIncome);
      setTaxableIncome(taxableIncome);
      setIncomeTax(incomeTax);
      setPensionDeductions(pensionDeductions);
      setNiTax(niTax);
      setPlanOneLoan(planOneLoan);
      setPlan2Loan(plan2Loan);
      setPgLoan(pgLoan);
      setTakehome(takehome);
      scrollDown();
    } else {
      console.log('error');
    }
  };

  return (
    <div className={`${className}`}>
      <section className='bg-base-300 rounded-lg shadow-md px-4 py-6 sm:pl-8'>
        <form onSubmit={handleSubmit} className='mx-auto'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 p-1 items-center justify-center'>
            <label className='text-lg sm:text-xl text-center md:text-start font-semibold'>
              Your annual salary £
            </label>
            <input
              type='number'
              placeholder='enter salary'
              className='input input-md h-10 input-borderer mx-20'
              step='0.01'
              min={0}
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <label className='text-lg sm:text-xl font-semibold text-center md:text-start'>
              Pension contributions %
            </label>
            <input
              className='input input-md h-10 input-bordered mx-20'
              type='number'
              step='0.01'
              min={0}
              max={100}
              required
              placeholder='enter pension'
              value={pensionRate}
              onChange={(e) => setPensionRate(e.target.value)}
            />
            <label className='text-lg sm:text-xl font-semibold text-center md:text-start'>
              Student loan plan
            </label>
            <div className='flex flex-row sm:space-x-2 justify-center md:justify-start'>
              <label className='label cursor-pointer font-medium'>
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
          <div className='flex justify-center mt-4'>
            <button className='btn btn-wide' type='submit'>
              Calculate
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;

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
    <div className={`${className}`}>
      <section className='bg-base-200 rounded-lg shadow-md p-8 mx-2'>
        <form onSubmit={handleSubmit} flex flex-col>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            <label className='text-xl font-semibold text-primary-700 flex items-center justify-center md:justify-start'>
              Your annual salary £
            </label>
            <div className='flex justify-center md:justify-start'>
              <input
                type='number'
                placeholder='Type here'
                className='input input-md leading-10 h-10 text-sm input-bordered max-w-full sm:max-w-full'
                step='0.01'
                min='0.01'
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                style={{ maxWidth: '100%' }} // Add this style
              />
            </div>

            <label className='text-xl font-semibold text-primary-700 flex items-center'>
              Pension contributions %
            </label>
            <input
              className='input input-bordered w-full sm:max-w-full'
              type='text'
              step='0.1'
              min='0.0'
              placeholder='5%'
              value={pensionRate}
              onChange={(e) => setPensionRate(e.target.value)}
            />
            <div className='flex items-center space-x-4 sm:flex-col md:flex-row sm:justify-start'>
              <label className='text-xl font-semibold block text-primary-700 mr-32'>
                Student loans
              </label>
              <label className='label cursor-pointer font-medium text-md'>
                Plan 1
                <input
                  type='checkbox'
                  checked={isPlanOneChecked}
                  onChange={() => setIsPlanOneChecked(!isPlanOneChecked)}
                  className='checkbox checkbox-primary h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer font-medium text-md'>
                Plan 2
                <input
                  type='checkbox'
                  checked={isPlanTwoChecked}
                  onChange={() => setIsPlanTwoChecked(!isPlanTwoChecked)}
                  className='checkbox checkbox-primary h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer font-medium text-md'>
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

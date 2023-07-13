import { useState } from 'react';
import {
  calculateGrossIncome,
  calculateIncomeTax,
  calculatePensionDeductions,
  calculateTaxableIncome,
  calculateNiTax,
  calculatePlanOneMonthlyLoan,
  calculatePlanTwoMonthlyLoan,
  calculatePgMonthlyLoan,
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
  const [isSalarySacrifice, setIsSalarySacrifice] = useState(false);
  const [isPlanOneChecked, setIsPlanOneChecked] = useState(false);
  const [isPlanTwoChecked, setIsPlanTwoChecked] = useState(false);
  const [isPgChecked, setIsPgChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (salary > 0 && pensionRate >= 0) {
      if (isSalarySacrifice) {
        const pensionPercentageDivided = pensionRate / 100;
        const newSalary = salary - salary * pensionPercentageDivided;
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
        const niTax = calculateNiTax(newSalary);

        const planOneLoan =
          isPlanOneChecked ??
          calculatePlanOneMonthlyLoan(newSalary, isPlanTwoChecked);

        const plan2Loan = isPlanTwoChecked
          ? calculatePlanTwoMonthlyLoan(newSalary)
          : '';
        const pgLoan = isPgChecked ? calculatePgMonthlyLoan(newSalary) : '';
        const takehome = calculateTakehome(
          salary,
          pensionPercentageDivided,
          isSalarySacrifice,
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
      } else if (salary > 0 && pensionRate >= 0) {
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

        const planOneLoan =
          isPlanOneChecked ??
          calculatePlanOneMonthlyLoan(salary, isPlanTwoChecked);

        const plan2Loan =
          isPlanTwoChecked ?? calculatePlanTwoMonthlyLoan(salary);

        const pgLoan = isPgChecked ? calculatePgMonthlyLoan(salary) : '';
        const takehome = calculateTakehome(
          salary,
          pensionPercentageDivided,
          isSalarySacrifice,
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
      }
    } else {
      console.log('error');
    }
  };

  return (
    <div className={`${className}`}>
      <section className='bg-base-100 rounded-lg shadow-md px-4 py-5'>
        <form onSubmit={handleSubmit} className='mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 sm:pl-8 p-1 items-center gap-y-1'>
            <label className='text-xl text-center sm:text-start font-semibold'>
              Your annual salary £
            </label>
            <input
              type='number'
              placeholder='enter salary'
              className='input input-md h-10 text-base sm:text-sm input-bordered mx-16'
              step='0.01'
              min={0}
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <div className='flex flex-col mt-4 sm:mt-0'>
              <label className='text-xl font-semibold text-center sm:text-start'>
                Pension contributions %
              </label>
              <div className='form-control'>
                <label className='label cursor-pointer flex justify-center sm:justify-start space-x-2 p-0'>
                  <span className='label-text text-sm'>Salary sacrifice</span>
                  <input
                    type='checkbox'
                    checked={isSalarySacrifice}
                    onChange={() => setIsSalarySacrifice(!isSalarySacrifice)}
                    className='checkbox checkbox-xs'
                  />
                </label>
              </div>
            </div>
            <input
              className='input input-md h-10 text-base sm:text-sm  input-bordered mx-16'
              type='number'
              step='0.01'
              min={0}
              max={100}
              required
              placeholder='enter pension'
              value={pensionRate}
              onChange={(e) => setPensionRate(e.target.value)}
            />
            <label className='text-xl font-semibold text-center sm:text-start mt-4 sm:mt-0'>
              Student loan plan
            </label>
            <div className='flex flex-row sm:space-x-2 justify-center'>
              <label className='label cursor-pointer text-sm sm:text-base'>
                Plan 1
                <input
                  type='checkbox'
                  checked={isPlanOneChecked}
                  onChange={() => setIsPlanOneChecked(!isPlanOneChecked)}
                  className='checkbox h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer text-sm sm:text-base'>
                Plan 2
                <input
                  type='checkbox'
                  checked={isPlanTwoChecked}
                  onChange={() => setIsPlanTwoChecked(!isPlanTwoChecked)}
                  className='checkbox h-5 w-5 ml-1'
                />
              </label>
              <label className='label cursor-pointer text-sm sm:text-base'>
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

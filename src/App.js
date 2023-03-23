import { useState } from 'react';

const PERSONAL_ALLOWANCE = 12570;
const BASIC_RATE_THRESHOLD = 50270;
const HIGHER_RATE_THRESHOLD = 150000;
const INCOME_TAX_RATE_BASIC = 0.2;
const INCOME_TAX_RATE_HIGHER = 0.4;
const INCOME_TAX_RATE_ADDITIONAL = 0.45;
const NI_RATE_SECONDARY = 0.12;
const NI_RATE_ADDITIONAL = 0.02;

const App = () => {
  const [income, setIncome] = useState('');
  const [percentage, setPercentage] = useState('');
  const [results, setResults] = useState({
    submittedIncome: null,
    incomeTax: null,
    niTax: null,
    studentTaxOne: null,
    studentTaxTwo: null,
    pgLoan: null,
    pension: null,
  });
  const [checkedLoans, setCheckedLoans] = useState({
    planOne: false,
    planTwo: false,
    pgLoan: false,
    pension: false,
  });

  const [submittedCheckedLoans, setSubmittedCheckedLoans] = useState({
    planOne: false,
    planTwo: false,
    pgLoan: false,
    pension: false,
  });

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const incomeTax = calculateIncomeTax(income);
    const niTax = calculateNITax(income);
    const studentTaxOne = checkedLoans.planOne
      ? calculatePlanOneLoan(income, checkedLoans.planTwo)
      : null;
    const studentTaxTwo = checkedLoans.planTwo
      ? calculatePlanTwoLoan(income)
      : null;
    const pgLoan = checkedLoans.pgLoan ? calculatePgLoan(income) : null;
    const pension = checkedLoans.pension
      ? calculatePension(income, percentage)
      : null;

    setResults({
      submittedIncome: income,
      incomeTax,
      niTax,
      studentTaxOne,
      studentTaxTwo,
      pgLoan,
      pension,
    });
    setSubmittedCheckedLoans(checkedLoans);
  };

  const handleCheckboxChange = (plan) => {
    setCheckedLoans({ ...checkedLoans, [plan]: !checkedLoans[plan] });
  };

  function calculateIncomeTax(salary) {
    let income = salary - calculatePension(salary, percentage);
    const personalAllowance =
      income <= 100000
        ? PERSONAL_ALLOWANCE
        : income > 100000 && income < 125140
        ? PERSONAL_ALLOWANCE - (income - 100000) * 0.5
        : 0;

    let tax = 0;
    if (income <= PERSONAL_ALLOWANCE) {
      return 0;
    }
    if (income > HIGHER_RATE_THRESHOLD) {
      tax += (income - HIGHER_RATE_THRESHOLD) * INCOME_TAX_RATE_ADDITIONAL;
      income = HIGHER_RATE_THRESHOLD;
    }
    if (income > BASIC_RATE_THRESHOLD) {
      tax += (income - BASIC_RATE_THRESHOLD) * INCOME_TAX_RATE_HIGHER;
      income = BASIC_RATE_THRESHOLD;
    }
    if (income > PERSONAL_ALLOWANCE) {
      tax += (income - PERSONAL_ALLOWANCE) * INCOME_TAX_RATE_BASIC;
      income = PERSONAL_ALLOWANCE;
    }
    if (income > 0) {
      tax += (income - personalAllowance) * INCOME_TAX_RATE_HIGHER;
    }

    return tax;
  }

  // Class 1A NI 23/24
  function calculateNITax(salary) {
    let ni = 0;

    if (salary > BASIC_RATE_THRESHOLD) {
      const additionalNI = salary - BASIC_RATE_THRESHOLD;
      ni += additionalNI * NI_RATE_ADDITIONAL;
      salary = BASIC_RATE_THRESHOLD;
    }

    if (salary > PERSONAL_ALLOWANCE) {
      const primaryNI = salary - PERSONAL_ALLOWANCE;
      ni += primaryNI * NI_RATE_SECONDARY;
    }

    return ni;
  }

  function calculatePlanOneLoan(income, planTwoChecked) {
    let tax = 0;
    if (income >= 20195) {
      if (income >= 27295 && planTwoChecked) {
        tax = (27295 - 20195) * 0.09;
      } else if (!planTwoChecked) {
        const taxableIncome = income - 20195;
        tax = taxableIncome * 0.09;
      }
    }
    return tax.toFixed(2);
  }
  function calculatePlanTwoLoan(income) {
    let tax = 0;
    if (income > 27295) {
      const taxableIncome = income - 27295;
      tax = taxableIncome * 0.09;
    }
    return tax.toFixed(2);
  }

  function calculatePgLoan(income) {
    let tax = 0;
    if (income > 21000) {
      const taxableIncome = income - 21000;
      tax = taxableIncome * 0.06;
    }
    return tax.toFixed(2);
  }

  function calculatePension(income, percentage) {
    console.log(income, percentage);
    let pension = income * (percentage / 100);
    return pension;
  }

  const netIncome = (
    results.submittedIncome -
    results.incomeTax -
    results.niTax -
    (submittedCheckedLoans.planOne ? results.studentTaxOne : 0) -
    (submittedCheckedLoans.planTwo ? results.studentTaxTwo : 0) -
    (submittedCheckedLoans.pgLoan ? results.pgLoan : 0) -
    (submittedCheckedLoans.pension ? results.pension : 0)
  ).toFixed(2);

  return (
    <div className='App'>
      <div>
        <h1>Income Tax Calculator</h1>
        <form onSubmit={handleSubmit} className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>What is your annual salary?</span>
          </label>
          <input
            min='0.01'
            step={0.01}
            type='number'
            name='salary'
            value={income}
            placeholder='£'
            className='input input-bordered w-full max-w-xs'
            onChange={handleChange}
            onWheel={(e) => {
              e.preventDefault();
            }}
          />
          <label className='label cursor-pointer'>
            <span className='label-text'>Plan 1 student loan</span>
            <input
              type='checkbox'
              checked={checkedLoans.planOne}
              onChange={() => handleCheckboxChange('planOne')}
              className='checkbox'
            />
          </label>
          <label className='label cursor-pointer'>
            <span className='label-text'>Plan 2 student loan</span>
            <input
              type='checkbox'
              checked={checkedLoans.planTwo}
              onChange={() => handleCheckboxChange('planTwo')}
              className='checkbox'
            />
          </label>
          <label className='label cursor-pointer'>
            <span className='label-text'>Postgraduate student loan</span>
            <input
              type='checkbox'
              checked={checkedLoans.pgLoan}
              onChange={() => handleCheckboxChange('pgLoan')}
              className='checkbox'
            />
          </label>
          <label className='label cursor-pointer'>
            <span className='label-text'>Pension</span>
            {checkedLoans.pension ? (
              <input
                min='0.01'
                step={0.01}
                type='number'
                name='pension'
                value={percentage}
                placeholder='£'
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setPercentage(e.target.value)}
                onWheel={(e) => {
                  e.preventDefault();
                }}
              />
            ) : (
              ''
            )}
            <input
              type='checkbox'
              checked={checkedLoans.pension}
              onChange={() => handleCheckboxChange('pension')}
              className='checkbox'
            />
          </label>

          <button type='submit' className='btn'>
            Calculate!
          </button>
        </form>

        <div>
          {results.submittedIncome !== null && (
            <div>
              Your net income is: £{netIncome}
              <br />
              Income Tax: £{results.incomeTax} <br />
              NI Tax: £{results.niTax} <br />
              {submittedCheckedLoans.planOne && results.studentTaxOne && (
                <>
                  Student loan 1: £{results.studentTaxOne} <br />{' '}
                </>
              )}
              {submittedCheckedLoans.planTwo && results.studentTaxTwo && (
                <>
                  Student loan 2: £{results.studentTaxTwo}
                  <br />
                </>
              )}
              {submittedCheckedLoans.pgLoan && results.pgLoan && (
                <>
                  Postgraduate loan: £{results.pgLoan} <br />
                </>
              )}
              {submittedCheckedLoans.pension && results.pension && (
                <>Pension: £{results.pension}</>
              )}
            </div>
          )}
        </div>
      </div>{' '}
    </div>
  );
};

export default App;

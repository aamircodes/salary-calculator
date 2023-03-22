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
  const [results, setResults] = useState({
    submittedIncome: null,
    incomeTax: null,
    niTax: null,
    studentTaxOne: null,
    studentTaxTwo: null,
  });
  const [checkedLoans, setCheckedLoans] = useState({
    planOne: false,
    planTwo: false,
  });

  const [submittedCheckedLoans, setSubmittedCheckedLoans] = useState({
    planOne: false,
    planTwo: false,
  });

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const incomeTax = calculateIncomeTax(income);
    const niTax = calculateNITax(income);
    const studentTaxOne = checkedLoans.planOne
      ? calculatePlanOneLoan(income)
      : null;
    const studentTaxTwo = checkedLoans.planTwo
      ? calculatePlanTwoLoan(income)
      : null;

    setResults({
      submittedIncome: income,
      incomeTax,
      niTax,
      studentTaxOne,
      studentTaxTwo,
    });
    setSubmittedCheckedLoans(checkedLoans);
  };

  const handleCheckboxChange = (plan) => {
    setCheckedLoans({ ...checkedLoans, [plan]: !checkedLoans[plan] });
  };

  function calculateIncomeTax(income) {
    const personalAllowance =
      income < 100000
        ? PERSONAL_ALLOWANCE
        : income > 100000 && income < 125140
        ? PERSONAL_ALLOWANCE - (income - 100000) * 0.5
        : 0;

    let tax = 0;
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
    const niThresholdPrimary = PERSONAL_ALLOWANCE;
    const niThresholdSecondary = BASIC_RATE_THRESHOLD;
    const niRateSecondary = NI_RATE_SECONDARY;
    const niRateAdditional = NI_RATE_ADDITIONAL;

    let ni = 0;

    if (salary > niThresholdSecondary) {
      const additionalNI = salary - niThresholdSecondary;
      ni += additionalNI * niRateAdditional;
      salary = niThresholdSecondary;
    }

    if (salary > niThresholdPrimary) {
      const primaryNI = salary - niThresholdPrimary;
      ni += primaryNI * niRateSecondary;
    }

    return ni;
  }

  function calculatePlanOneLoan(income) {
    let tax = 0;
    if (income >= 20195) {
      const taxableIncome = income - 20195;
      tax = taxableIncome * 0.09;
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
            step='0.01'
            type='number'
            name='salary'
            value={income}
            placeholder='£'
            className='input input-bordered w-full max-w-xs'
            onChange={handleChange}
            onWheel={(e) => {
              e.preventDefault();
            }}
            style={{ overflow: 'hidden' }}
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
          <button type='submit' className='btn'>
            Calculate!
          </button>
          <div>
            {results.submittedIncome !== null && (
              <div>
                Your net income is: £
                {results.submittedIncome -
                  results.incomeTax -
                  results.niTax -
                  (submittedCheckedLoans.planOne ? results.studentTaxOne : 0) -
                  (submittedCheckedLoans.planTwo ? results.studentTaxTwo : 0)}
                <br />
                Income Tax: £{results.incomeTax} <br />
                NI Tax: £{results.niTax} <br />
                {submittedCheckedLoans.planOne && results.studentTaxOne && (
                  <> Student loan 1: £{results.studentTaxOne}</>
                )}
                {submittedCheckedLoans.planTwo && results.studentTaxTwo && (
                  <>Student loan 2: £{results.studentTaxTwo}</>
                )}
              </div>
            )}
          </div>
        </form>
      </div>{' '}
    </div>
  );
};

export default App;

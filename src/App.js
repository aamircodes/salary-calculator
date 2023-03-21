import { useState } from 'react';

const App = () => {
  const [income, setIncome] = useState('');
  const [submittedIncome, setSubmittedIncome] = useState(null);
  const [incomeTax, setIncomeTax] = useState(null);
  const [niTax, setNiTax] = useState(null);
  const [studentTaxTwo, setStudentTaxTwo] = useState(null);
  const [studentTaxOne, setStudentTaxOne] = useState(null);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckedTwo(e.target.checked);
  };

  const handleChange = (e) => {
    setIncome(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedIncome(income);
    setIncomeTax(calculateIncomeTax(income));
    setNiTax(calculateNITax(income));
    setStudentTaxTwo(calculatePlanTwoLoan(income));
    setStudentTaxOne(calculatePlanOneLoan(income));
  };

  function calculateIncomeTax(income) {
    const personalAllowance =
      income < 100000
        ? 12570
        : income > 100000 && income < 125140
        ? 12570 - (income - 100000) * 0.5
        : 0;

    let tax = 0;
    if (income > 150000) {
      tax += (income - 150000) * 0.45;
      income = 150000;
    }
    if (income > 50270) {
      tax += (income - 50270) * 0.4;
      income = 50270;
    }
    if (income > 12570) {
      tax += (income - 12570) * 0.2;
      income = 12570;
    }
    if (income > 0) {
      tax += (income - personalAllowance) * 0.4;
    }

    return tax;
  }

  // Class 1A NI 23/24
  function calculateNITax(salary) {
    const niThresholdPrimary = 12570;
    const niThresholdSecondary = 50270;
    const niRateSecondary = 0.12;
    const niRateAdditional = 0.02;

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
    if (income > 20195) {
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
          />
          <label className='label cursor-pointer'>
            <span className='label-text'>Plan 2 student loan</span>
            <input
              type='checkbox'
              checked={isCheckedTwo}
              onChange={handleCheckboxChange}
              className='checkbox'
            />
          </label>
          <button type='submit' className='btn'>
            Calculate!
          </button>
          <div>
            {submittedIncome !== null && (
              <div>
                Your net income is: £
                {submittedIncome -
                  incomeTax -
                  niTax -
                  studentTaxTwo -
                  studentTaxOne}{' '}
                <br />
                Income Tax: £{incomeTax} <br />
                NI Tax: £{niTax} <br />
                {isCheckedTwo && <>Student loan: £{studentTaxTwo}</>}
              </div>
            )}
          </div>
        </form>
      </div>{' '}
    </div>
  );
};

export default App;

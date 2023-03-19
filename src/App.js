import { useState } from 'react';

const App = () => {
  const [income, setIncome] = useState('');
  const [submittedIncome, setSubmittedIncome] = useState(null);
  const [tax, setTax] = useState(null);

  const handleChange = (e) => {
    setIncome(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    setSubmittedIncome(income);
    const taxValue = calcTax(submittedIncome);
    setTax(taxValue);
    setIncome('');
  };

  const calcTax = (salary) => {
    const personalAllowance = 12570;
    const basicRateThreshold = 50270;
    const higherRateThreshold = 150000;
    const basicRate = 0.2;
    const higherRate = 0.4;
    const additionalRate = 0.45;

    let tax = 0;
    if (salary <= personalAllowance) {
      return tax;
    } else if (salary < basicRateThreshold) {
      tax = (salary - personalAllowance) * basicRate;
      return tax;
    } else if (salary < higherRate) {
      const basicRateTax = (basicRateThreshold - personalAllowance) * basicRate;
      const higherRateTax = (salary - basicRate) * higherRate;
      tax = basicRateTax + higherRateTax;
      return tax;
    } else {
      const basicRateTax = (basicRateThreshold - personalAllowance) * basicRate;
      const higherRateTax =
        (higherRateThreshold - basicRateThreshold) * higherRate;
      const additionalRateTax = (salary - higherRateThreshold) * additionalRate;
      tax = basicRateTax + higherRateTax + additionalRateTax;
      return tax;
    }
  };

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
          <button type='submit' className='btn'>
            Calculate!
          </button>
          <div>
            {submittedIncome !== null && (
              <div>
                {' '}
                Your income is: £{submittedIncome} {tax}
              </div>
            )}
          </div>
        </form>
      </div>{' '}
    </div>
  );
};

export default App;

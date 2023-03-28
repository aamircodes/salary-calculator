import { useState } from 'react';

const MockForm = () => {
  const [mockSalary, setMockSalary] = useState('');
  const [mockPension, setMockPension] = useState('');
  const [plan1Checked, setPlan1Checked] = useState(false);
  const [plan2Checked, setPlan2Checked] = useState(false);
  const [pgLoanChecked, setPgLoanChecked] = useState(false);

  const handleMockSubmit = (e) => {
    e.preventDefault();
    console.log(
      `selected loan options are ${JSON.stringify({
        plan1Checked,
        plan2Checked,
        pgLoanChecked,
      })}`
    );
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Take home calculator</h1>
      <form className='flex flex-col gap-4' onSubmit={handleMockSubmit}>
        <div className='flex flex-col gap-2'>
          <label className='text-lg font-semibold cursor-pointer'>
            <span className='label-text mr-2'>Salary {`\u00A3`}</span>
            <input
              className='input input-bordered max-w-xs'
              type='number'
              step='0.01'
              min='0.01'
              placeholder='£'
              value={mockSalary}
              onChange={(e) => setMockSalary(e.target.value)}
            />
          </label>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-lg font-semibold cursor-pointer'>
            <span className='label-text mr-2'>Pension {`\u0025`}</span>
            <input
              className='input input-bordered max-w-xs'
              type='number'
              step='0.1'
              min='0.0'
              placeholder='%'
              value={mockPension}
              onChange={(e) => setMockPension(e.target.value)}
            />
          </label>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-lg font-semibold cursor-pointer'>
            <span className='label-text'>Student loans</span>
            <div className='flex flex-row gap-4'>
              <label className='label cursor-pointer'>
                <span className='label-text mr-2'>plan1</span>
                <input
                  type='checkbox'
                  checked={plan1Checked}
                  onChange={() => setPlan1Checked(!plan1Checked)}
                  className='checkbox'
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text mr-2'>plan2</span>
                <input
                  type='checkbox'
                  checked={plan2Checked}
                  onChange={() => setPlan2Checked(!plan2Checked)}
                  className='checkbox'
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text mr-2'>pg loan</span>
                <input
                  type='checkbox'
                  checked={pgLoanChecked}
                  onChange={() => setPgLoanChecked(!pgLoanChecked)}
                  className='checkbox'
                />
              </label>
            </div>
          </label>
        </div>
        <button className='btn w-full max-w-xs' type='submit'>
          Calculate
        </button>
      </form>
    </div>
  );
};

export default MockForm;

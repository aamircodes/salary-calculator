import { useState } from 'react';
import Form from './components/Form';
import MockForm from './components/MockForm';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = useState({
    submittedIncome: null,
    incomeTax: null,
    niTax: null,
    studentTaxOne: null,
    studentTaxTwo: null,
    pgLoan: null,
    pension: '',
  });

  const [submittedCheckedLoans, setSubmittedCheckedLoans] = useState({
    planOne: false,
    planTwo: false,
    pgLoan: false,
    pension: false,
  });

  return (
    <div className='container mx-auto flex justify-center items-center h-screen'>
      {/* <header className='w-full my-4 px-4 md:pt-4'> */}
      {/* <div className='navbar justify-between bg-base-100 text-base-content rounded-box w-full max-w-xl mx-auto'>
          <div className='flex-none'></div>
          <div className='flex-none'>
            <h1>Income Tax Calculator</h1>
          </div>
          <div className='flex-none'></div>
        </div>
      </header> */}
      {/* <div className='max-w-7xl mx-auto px-4 py-8'> */}
      {/* <div className='flex flex-wrap -mx-1'> */}
      {/* <div className='w-full md:w-1/4 px-2'> */}
      {/* <Form
        className='form-control w-full max-w-xs flex'
        setResults={setResults}
        setSubmittedCheckedLoans={setSubmittedCheckedLoans}
      /> */}
      {/* </div>
          <div className='w-full md:w-3/4 px-3'>
            <Results
              results={results}
              submittedCheckedLoans={submittedCheckedLoans}
            /> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      <MockForm />
    </div>
  );
};

export default App;

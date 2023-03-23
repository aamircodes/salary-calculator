import { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = useState({
    submittedIncome: null,
    incomeTax: null,
    niTax: null,
    studentTaxOne: null,
    studentTaxTwo: null,
    pgLoan: null,
    pension: null,
  });

  const [submittedCheckedLoans, setSubmittedCheckedLoans] = useState({
    planOne: false,
    planTwo: false,
    pgLoan: false,
    pension: false,
  });

  return (
    <div className='App'>
      <div>
        <h1>Income Tax Calculator</h1>
        <Form
          setResults={setResults}
          setSubmittedCheckedLoans={setSubmittedCheckedLoans}
        />
        <Results
          results={results}
          submittedCheckedLoans={submittedCheckedLoans}
        />
      </div>{' '}
    </div>
  );
};

export default App;

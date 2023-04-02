import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const [grossIncome, setGrossIncome] = useState(null);
  const [taxableIncome, setTaxableIncome] = useState(null);
  const [incomeTax, setIncomeTax] = useState('');
  const [pensionDeductions, setPensionDeductions] = useState('');

  return (
    <div className='App'>
      <div className='flex flex-row justify-start items-center h-full border border-white-500'>
        <Form
          setGrossIncome={setGrossIncome}
          setTaxableIncome={setTaxableIncome}
          setIncomeTax={setIncomeTax}
          setPensionDeductions={setPensionDeductions}
        />
        <Table
          grossIncome={grossIncome}
          taxableIncome={taxableIncome}
          incomeTax={incomeTax}
          pensionDeductions={pensionDeductions}
        />
      </div>
    </div>
  );
};

export default App;

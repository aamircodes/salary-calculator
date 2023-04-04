import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Header from './components/Header';

const App = () => {
  const [grossIncome, setGrossIncome] = useState(null);
  const [taxableIncome, setTaxableIncome] = useState(null);
  const [incomeTax, setIncomeTax] = useState('');
  const [pensionDeductions, setPensionDeductions] = useState('');
  const [niTax, setNiTax] = useState('');
  const [plan1Loan, setPlan1Loan] = useState('');
  const [plan2Loan, setPlan2Loan] = useState('');
  const [pgLoan, setPgLoan] = useState('');
  const [takehome, setTakehome] = useState('');

  return (
    <>
      <Header />
      <div className='flex flex-row border border-rose-500'>
        <div className='w-1/2'>
          <Form
            setGrossIncome={setGrossIncome}
            setTaxableIncome={setTaxableIncome}
            setIncomeTax={setIncomeTax}
            setPensionDeductions={setPensionDeductions}
            setNiTax={setNiTax}
            setPlan1Loan={setPlan1Loan}
            setPlan2Loan={setPlan2Loan}
            setPgLoan={setPgLoan}
            setTakehome={setTakehome}
          />
        </div>
        <div className='w-1/2'>
          <Table
            grossIncome={grossIncome}
            taxableIncome={taxableIncome}
            incomeTax={incomeTax}
            pensionDeductions={pensionDeductions}
            niTax={niTax}
            plan1Loan={plan1Loan}
            plan2Loan={plan2Loan}
            pgLoan={pgLoan}
            takehome={takehome}
          />
        </div>
      </div>
    </>
  );
};

export default App;

import { useState, useRef } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Header from './components/Header';
import RecalculateButton from './components/RecalculateButton';

const App = () => {
  const tableRef = useRef(null);
  const formRef = useRef(null);

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
    <div className='container max-w-3xl mx-auto flex flex-col gap-12 bg-base-100'>
      <Header />
      <div ref={formRef}>
        <Form
          scrollDown={() =>
            tableRef.current.scrollIntoView({ behavior: 'smooth' })
          }
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
      <div ref={tableRef}>
        <Table
          className='my-12'
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
      <div className='mb-4'>
        <RecalculateButton
          scrollUp={() =>
            formRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
      <div>
        <div className='divider p-12'></div>
        <footer className='footer footer-center'>
          <div>
            <p> 'twitter icon' Tweet me with any feedback here</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

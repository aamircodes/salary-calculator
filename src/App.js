import { useState, useRef } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Header from './components/Header';
import RecalculateButton from './components/RecalculateButton';
import TakehomeText from './components/TakehomeText';
import Footer from './components/Footer';

const App = () => {
  const tableRef = useRef(null);
  const formRef = useRef(null);
  const [grossIncome, setGrossIncome] = useState(null);
  const [taxableIncome, setTaxableIncome] = useState(null);
  const [incomeTax, setIncomeTax] = useState('');
  const [pensionDeductions, setPensionDeductions] = useState('');
  const [niTax, setNiTax] = useState('');
  const [planOneLoan, setPlanOneLoan] = useState('');
  const [plan2Loan, setPlan2Loan] = useState('');
  const [pgLoan, setPgLoan] = useState('');
  const [takehome, setTakehome] = useState('');

  return (
    <div className='bg-base-300'>
      <div className='max-w-4xl mx-auto flex flex-col gap-8 sm:gap-12'>
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
            setPlanOneLoan={setPlanOneLoan}
            setPlan2Loan={setPlan2Loan}
            setPgLoan={setPgLoan}
            setTakehome={setTakehome}
          />
        </div>
        <div ref={tableRef}>
          <Table
            className='md:my-8'
            grossIncome={grossIncome}
            taxableIncome={taxableIncome}
            incomeTax={incomeTax}
            pensionDeductions={pensionDeductions}
            niTax={niTax}
            planOneLoan={planOneLoan}
            plan2Loan={plan2Loan}
            pgLoan={pgLoan}
            takehome={takehome}
          />
        </div>
        <TakehomeText takehome={takehome} gross={grossIncome} />
        <RecalculateButton
          scrollUp={() =>
            formRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;

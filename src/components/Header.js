import incomeIcon from '../logo.png';

const Header = () => {
  return (
    <header className='text-center bg-base-300 rounded-lg px-4'>
      <div className='py-4 flex items-center justify-center'>
        <img className='h-10 mr-2' src={incomeIcon} alt='icon' />
        <div className='flex flex-col md:flex-row'>
          <span className='text-xl md:text-2xl font-bold'>
            Take Home Salary Calculator
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

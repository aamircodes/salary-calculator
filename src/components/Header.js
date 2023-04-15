import incomeIcon from '../logo.png';

const Header = () => {
  return (
    <header className='text-center mt-4 mb-12 container mx-auto bg-base-200 rounded-lg px-4 md:px-0'>
      <div className='text-3xl font-bold py-4 flex items-center justify-center'>
        <img
          className='inline w-8 h-8 mr-2 md:mr-4 align-middle'
          src={incomeIcon}
          alt='icon'
        />
        <span className='align-middle text-lg md:text-3xl'>
          Take Home Salary Calculator
        </span>
      </div>
    </header>
  );
};

export default Header;

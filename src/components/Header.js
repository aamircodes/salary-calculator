import incomeIcon from '../logo.png';

const Header = () => {
  return (
    <header className='text-center bg-base-300 rounded-lg px-4 md:px-0 mt-4'>
      <div className='py-5 flex items-center justify-center'>
        <img
          className='inline w-8 h-8 mr-2 md:mr-4 align-middle'
          src={incomeIcon}
          alt='icon'
        />
        <span className='align-middle text-2xl  font-extrabold'>
          Take Home Salary Calculator
        </span>
      </div>
    </header>
  );
};

export default Header;

import incomeIcon from '../logo.png';

const Header = () => {
  return (
    <header className='text-center mt-4 mb-12 container mx-auto bg-base-300 rounded-lg'>
      <div className='text-3xl font-bold py-4'>
        <img className='inline w-8 h-8 mr-2 align-middle' src={incomeIcon} />{' '}
        <span className='align-middle'>Take Home Salary Calculator</span>
      </div>
    </header>
  );
};

export default Header;

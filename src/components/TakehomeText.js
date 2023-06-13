import calculateIncomePercentile from '../utils/calculateIncomePercentile';

const TakehomeText = ({ takehome, gross }) => {
  const incomePercentile = calculateIncomePercentile(gross);

  const takeHomePercentage = Math.floor((takehome / gross) * 100);
  const message = gross
    ? `You take home ${takeHomePercentage}% of your annual salary and you are in the top ${incomePercentile} of earners in the UK`
    : 'Find out what % of your salary you take home by using the form above';

  return (
    <div className='m-2 md:m-0 rounded-lg bg-base-100 shadow-md text-center font-bold'>
      <p className='text-base md:text-lg p-4 px-8 sm:p-4 mx-auto'>{message}</p>
    </div>
  );
};

export default TakehomeText;

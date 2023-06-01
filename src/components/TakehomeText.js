const TakehomeText = ({ percent, totalPay }) => {
  return (
    <div className='rounded-lg bg-base-300 shadow-md p-4 text-center font-bold '>
      {totalPay
        ? `You take home ${Number((percent / totalPay) * 100).toFixed(
            2
          )}% of your annual salary`
        : 'Find out what % of your salary you take home by using the form above'}
    </div>
  );
};

export default TakehomeText;

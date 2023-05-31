const TakehomeText = ({ percent, totalPay }) => {
  return (
    <div className='rounded-lg bg-base-300 shadow-md p-4 text-center font-bold'>
      You take home {Number((percent / totalPay) * 100).toFixed(2)}% of your
      annual salary
    </div>
  );
};

export default TakehomeText;

const RecalculateButton = ({ scrollUp }) => {
  return (
    <div className='flex justify-center'>
      <button className='btn btn-wide' onClick={scrollUp}>
        Recalculate
      </button>
    </div>
  );
};

export default RecalculateButton;

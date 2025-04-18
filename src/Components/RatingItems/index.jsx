const RatingItemEl = (props) => {
    const { ratingData, updaterating, ratingIsActive } = props;
    const selectedRatingStyle = ratingIsActive ? 'text-[rgb(58,187,237)]' : '';
    const { ratingId, imageUrl } = ratingData;
  
    const clickedRating = () => {
      updaterating(ratingId);
    };
  
    return (
      <div className="flex flex-row justify-start">
        <img
          src={imageUrl}
          className="mr-[10px] w-[140px] h-[30px]"
          alt="stars"
        />
        <p
          className={`font-['Roboto'] text-[18px] font-[450] text-[#475569] mt-[2px] cursor-pointer ${selectedRatingStyle}`}
          onClick={clickedRating}
        >
          &up
        </p>
      </div>
    );
  };
  
  export default RatingItemEl;
  
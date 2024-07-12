//  const customClass = "bg-blue-100";
import PropTypes from "prop-types";
const OptionCard = ({
  title,
  image,
  onClick,
  customClass,
  customClassImg,
  customClassTitle,
}) => {
  return (
    <>
      <div
        // className="flex flex-col items-center justify-center p-4 border cursor-pointer w-60 rounded-md shadow-sm duration-200 hover:shadow-md hover:bg-blue-100 active:shadow-lg"
        className={customClass}
        onClick={onClick}
      >
        <img src={image} alt={`${title} image`} className={customClassImg} />
        <h1 className={customClassTitle}>{title}</h1>
      </div>
    </>
  );
};

OptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  customClassImg: PropTypes.string,
  customClassTitle: PropTypes.string,
};

export default OptionCard;

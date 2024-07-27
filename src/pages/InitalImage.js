import PropTypes from "prop-types";

const IntialImg = ({ className = "", image, NAME, mB }) => {
  return (
    <div
      className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap ${className}`}
    >
      <img
        className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block max-w-[calc(100%_-_24px)]">
              {NAME}
            </div>
            <img className="h-6 w-6 relative" alt="" src="/statedefault.svg" />
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-text-secondary">
            {mB}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-text-secondary">
          <div className="rounded-rounded flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/button-placeholdericon-12.svg"
            />
            <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
              <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                Crop image
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
              alt=""
              src="/button-placeholdericon9.svg"
            />
          </div>
          <div className="relative text-xs leading-[16px] inline-block min-w-[5px]">
            •
          </div>
          <div className="rounded-rounded flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/button-placeholdericon8.svg"
            />
            <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
              <div className="relative leading-[20px] font-medium inline-block min-w-[44px]">
                Delete
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
              alt=""
              src="/button-placeholdericon9.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

IntialImg.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  NAME: PropTypes.string,
  mB: PropTypes.string,
};

export default IntialImg;

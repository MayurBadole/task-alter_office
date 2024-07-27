import { useMemo } from "react";
import PropTypes from "prop-types";

const ImageUploadSuccess = ({ className = "", propAlignSelf, propWidth ,image, NAME, kB }) => {
  const rowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap ${className}`}
      style={rowStyle}
    >
      <img
        className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
            <div className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[82px] max-w-full">
              {NAME}
            </div>
            <div className="rounded-rounded flex flex-row items-center justify-center">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/button-placeholdericon-10.svg"
              />
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-text-secondary">
            {kB}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-xs text-text-success mq450:flex-wrap">
          <div className="rounded-rounded flex flex-row items-center justify-center">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/button-placeholdericon-17.svg"
            />
          </div>
          <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[72px] max-w-full">
            Upload success!
          </div>
        </div>
      </div>
    </div>
  );
};

ImageUploadSuccess.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ImageUploadSuccess;

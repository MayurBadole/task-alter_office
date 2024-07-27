import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../style.css";

const UnifiedImageComponent = ({
  className = "",
  image,
  size,
  NAME,
  showProgress,
  propAlignSelf,
  propWidth,
  onDelete,
  onSelect,
  openCropModal,
  handleCropImages,
  toggleUploaderVisibility,
}) => {
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(false);

  const allowedExtensions = ["svg", "png", "jpeg", "jpg"];
  const extension = NAME.split(".").pop().toLowerCase();
  const handleCrop = () => {
    openCropModal();
    toggleUploaderVisibility();
    const croppedImage = image;
    handleCropImages(croppedImage);
  };
  useEffect(() => {
    if (!allowedExtensions.includes(extension)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    // eslint-disable-next-line
  }, [extension]);

  useEffect(() => {
    if (showProgress) {
      const intervalId = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(intervalId);
            setShowSuccess(true);
            return 100;
          }
        });
      }, 100);

      return () => clearInterval(intervalId);
    } else {
      setProgress(0);
    }
  }, [showProgress]);

  useEffect(() => {
    if (!showProgress) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 350); // Showing success message for 350ms
      return () => clearTimeout(timer);
    }
  }, [showProgress]);
  const progressPercentage = Math.max(0, Math.min(progress, 100));

  if (size > "5120KB") {
    return (
      <div
        className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap ${className}`}
      >
        <img
          className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover mq450:w-[60px] mq450:h-[60px]"
          loading="lazy"
          alt=""
          src="./errorImg.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] mq450:min-w-[150px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
              <div className=" truncate flex-1 relative leading-[24px] font-semibold inline-block min-w-[402px] mq450:min-w-[150px] max-w-full  mq450:flex-1 mq450:text-[12px]">
                {NAME}
              </div>
              <div
                onClick={onDelete}
                className="cursor-pointer rounded-rounded flex flex-row items-center justify-center"
              >
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/button-placeholdericon-10.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[16px] text-text-secondary mq450:text-[10px]">
              {size}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-xs text-text-error mq450:flex-wrap">
            <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[72px] max-w-full">
              This image is larger than 5MB. Please select a smaller image.
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (showError) {
    return (
      <div
        className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap ${className}`}
      >
        <img
          className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover mq450:w-[60px] mq450:h-[60px]"
          loading="lazy"
          alt=""
          src="./errorImg.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] mq450:min-w-[150px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
              <div className="truncate flex-1 relative leading-[24px] font-semibold inline-block min-w-[402px] mq450:min-w-[150px] max-w-full  mq450:flex-1 mq450:text-[12px]">
                {NAME}
              </div>
              <div
                onClick={onDelete}
                className="cursor-pointer rounded-rounded flex flex-row items-center justify-center"
              >
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/button-placeholdericon-10.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[16px] text-text-secondary mq450:text-[10px]">
              {size}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-xs text-text-error mq450:flex-wrap">
            <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[72px] max-w-full">
              The file format of IMG_0080.pcx is not supported. Please upload an
              image in one of the following formats: JPG or PNG.{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap ${className}`}
    >
      {showProgress ? (
        <div
          className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-start justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap`}
          style={{ alignSelf: propAlignSelf, width: propWidth }}
        >
          <img
            className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover mq450:w-[60px] mq450:h-[60px]"
            loading="lazy"
            alt=""
            src={image}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] max-w-full mq450:min-w-[150px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                <div className="truncate flex-1 relative leading-[24px] font-semibold inline-block min-w-[402px] max-w-full mq450:min-w-[150px] mq450:flex-1 mq450:text-[12px]">
                  {NAME}
                </div>
                <div
                  className="rounded-rounded flex flex-row items-center justify-center"
                  onClick={onDelete}
                >
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/button-placeholdericon-10.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative text-xs leading-[16px] text-text-secondary">
                {size}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full text-xs text-text-secondary mq450:flex-wrap ">
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[255px] max-w-full mq450:min-w-[185px]">
                <div className="self-stretch h-1.5 rounded-border-radius-full bg-background-secondary flex flex-row items-start justify-start relative">
                  <div
                    className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-border-radius-full bg-background-brand-primary "
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
              <div className="relative leading-[16px] font-medium inline-block min-w-[24px]">
                {progressPercentage}%
              </div>
            </div>
          </div>
        </div>
      ) : showSuccess ? (
        <div
          className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap ${className}`}
        >
          <img
            className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover mq450:w-[60px] mq450:h-[60px]"
            loading="lazy"
            alt=""
            src={image}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] max-w-full mq450:min-w-[150px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                <div className="truncate flex-1 relative leading-[24px] font-semibold inline-block min-w-[402px] max-w-full mq450:min-w-[204px] mq450:flex-1 mq450:text-[12px]">
                  {NAME}
                </div>
                <div
                  onClick={onDelete}
                  className="cursor-pointer rounded-rounded flex flex-row items-center justify-center "
                >
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/button-placeholdericon-10.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative text-xs leading-[16px] text-text-secondary">
                {size}
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
      ) : (
        <div
          className={`self-stretch rounded-border-radius-rounded-4px flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-base text-text-primary font-text-base-16-medium mq825:flex-wrap`}
          style={{ alignSelf: propAlignSelf, width: propWidth }}
        >
          <img
            className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px object-cover mq450:w-[60px] mq450:h-[60px]"
            loading="lazy"
            alt=""
            src={image}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[431px] max-w-full mq450:min-w-[150px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full mq450:flex-wrap gap-[16px]">
                <div className="truncate flex-1 relative leading-[24px] font-semibold inline-block mq450:min-w-[185px] max-w-full  mq450:flex-1 mq450:text-[12px]">
                  {NAME}
                </div>
                <label className="relative inline-block cursor-pointer w-6 h-6">
                  <input
                    type="radio"
                    name="option"
                    className="hidden custom-radio-input"
                    onClick={onSelect}
                  />
                  <img
                    className="custom-radio-icon h-6 w-6 relative"
                    alt=""
                    src="/statedefault.svg"
                  />
                </label>
              </div>
              <div className="self-stretch relative text-xs leading-[16px] text-text-secondary mq450:text-[10px]">
                {size}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-text-secondary ">
              <div
                onClick={handleCrop}
                className="cursor-pointer rounded-rounded flex flex-row items-center justify-center gap-[4px]"
              >
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/button-placeholdericon-12.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
                  <div className="mq450:text-[12px] relative leading-[20px] font-medium inline-block min-w-[78px]">
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
              <div
                className="rounded-rounded flex flex-row items-center justify-center gap-[4px] hover:text-black cursor-pointer focus:outline-none focus:ring-0 focus:border-gray-500 focus:ring-custom ring-offset-custom ring-opacity-custom ring-width-custom "
                tabIndex="0"
                onClick={onDelete}
              >
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] transition-filter duration-300"
                  alt=""
                  src="/button-placeholdericon8.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
                  <div className="mq450:text-[12px] relative leading-[20px] font-medium inline-block min-w-[44px]">
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
      )}
    </div>
  );
};

UnifiedImageComponent.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  NAME: PropTypes.string,
  size: PropTypes.string,
  showProgress: PropTypes.bool.isRequired,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

export default UnifiedImageComponent;

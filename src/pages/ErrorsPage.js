import PropTypes from "prop-types";

const ErrorTypes = ({
  className = "",
  errorFileSizeLimitExceede,
  thisImageIsLargerThan5MBP,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-left text-xl text-gray-100 font-text-base-16-medium ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
          {errorFileSizeLimitExceede}
        </div>
        <div className="self-stretch rounded-border-radius-rounded-4px flex flex-row items-start justify-start gap-[16px] max-w-full text-base text-text-primary mq450:flex-wrap">
          <div className="w-20 rounded-md bg-background-tertiary box-border flex flex-row items-start justify-start p-[23px] border-[0.9px] border-solid border-border-primary">
            <div className="h-width-20-80px w-width-20-80px relative rounded-border-radius-rounded-md-6px bg-background-tertiary box-border hidden border-[0.9px] border-solid border-border-primary" />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/filedamageline.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[281px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                <div className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[82px] max-w-full">
                  IMG_0080.jpg
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
                12MB
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[16px] font-medium text-text-error">
              {thisImageIsLargerThan5MBP}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ErrorTypes.propTypes = {
  className: PropTypes.string,
  errorFileSizeLimitExceede: PropTypes.string,
  thisImageIsLargerThan5MBP: PropTypes.string,
};

export default ErrorTypes;

import { useState, useEffect } from "react";
import Namedetails from "../pages/Namedetails";

const DefaultDesktop = () => {
  const [submitImageSuccess, setSubmitImageSuccess] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const handleSubmitImage = () => {
    setSubmitImageSuccess(true);
  };

  useEffect(() => {
    if (submitImageSuccess) {
      const timer = setTimeout(() => {
        setSubmitImageSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitImageSuccess]);

  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start pt-40 py-[150px] pr-7 pl-5 box-border gap-[102px] leading-[normal] tracking-[normal] text-center text-sm text-text-success font-text-xl-20-normal mq450:gap-[25px] mq825:gap-[51px]">
      {submitImageSuccess && (
        <div className="w-[768px] mt-[-125px] flex flex-row items-start justify-center py-0 pr-0 pl-2 box-border max-w-full">
          <div className="w-[282px] rounded-1981xl bg-background-success-subtle flex flex-row items-start justify-start p-1 box-border gap-[12px]">
            <div className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-radius-full bg-background-primary flex flex-row items-start justify-start py-0.5 px-2.5 mix-blend-normal">
              <span className="[text-decoration:none] relative font-medium text-[inherit] inline-block">
                Success
              </span>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-left">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[20px] font-medium">
                  Changes saved successfully
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-max-width-3xl-768px shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-1px_rgba(0,_0,_0,_0.06)] rounded-border-radius-rounded-lg-8px bg-background-primary box-border shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[37px] max-w-full border-[1px] border-solid border-border-primary">
        <img
          className="self-stretch h-[176px] relative max-w-full shrink-0 object-cover"
          alt=""
          src="/cover@2x.png"
        />
        <Namedetails handleSubmitImage={handleSubmitImage} />
      </div>
    </div>
  );
};

export default DefaultDesktop;

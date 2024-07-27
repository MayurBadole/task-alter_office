import React, { useState } from "react";
import PropTypes from "prop-types";
import FileUploader from "../componets/FileUploader";
import CropModal from "../componets/CropModel";

const Namedetails = ({ handleSubmitImage }) => {
  const [isUploaderVisible, setIsUploaderVisible] = useState(false);
  const [imageLenght, setLenght] = useState(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [iscropImages, setIscropImages] = useState(null);
  const [profilePicture, setProfilePicture] = useState("/avatar.svg");
  const toggleUploaderVisibility = () => {
    setLenght(null);
    setIsUploaderVisible(!isUploaderVisible);
  };

  const openCropModal = () => {
    setIsCropModalOpen(true);
  };

  const closeCropModal = () => {
    setIsCropModalOpen(false);
  };
  const handleCropImages = (img) => {
    setIscropImages(img);
  };
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-padding-8-32px pb-padding-8-32px box-border gap-[24px] max-w-full z-[1] mt-[-99px] text-left text-base text-text-primary font-text-xl-20-normal mq450:h-[348px]
         ${
           isUploaderVisible && imageLenght >= 2
             ? "h-[135vh] mq450:h-[250vh]"
             : "none"
         }`}
    >
      {(isUploaderVisible || isCropModalOpen) && (
        <section className="w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full z-[2]">
          <div className="self-stretch flex-1 relative bg-gray overflow-hidden max-w-full" />
        </section>
      )}
      <div className="self-stretch relative flex flex-row items-end mq450:top-[55px] justify-between gap-[20px]">
        <img
          className={`h-40 w-40 mq450:w-[125px] mq450:h-[125px]  relative rounded-border-radius-full overflow-hidden shrink-0 object-cover mq450:flex-11 mq450:ml-[-15px]`}
          loading="lazy"
          alt=""
          src={profilePicture}
        />
        <button
          className="cursor-pointer shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-rounded bg-background-primary flex flex-row items-center justify-center py-[9px] px-[15px] gap-[6px] border-[0.5px] border-solid border-border-primary hover:bg-[#FAFAFA] focus:ring-custom ring-offset-custom ring-opacity-custom ring-width-custom focus:outline-none focus:ring"
          onClick={toggleUploaderVisibility}
        >
          <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px cursor-pointer">
            <div className="relative leading-[24px] font-medium inline-block min-w-[115px] text-[16px] mq450:text-[14px]">
              Update picture
            </div>
          </div>
        </button>
      </div>
      <h3 className="m-0 relative text-11xl leading-[36px] font-semibold font-inherit mq450:text-5xl mq450:font-semibold mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px] mq450:top-[50px]">
        Jack Smith
      </h3>
      <div className="flex relative flex-col items-start justify-start max-w-full text-xl mq450:top-[50px]">
        <div className="flex flex-row items-start justify-start gap-[12px] mq450:gap-[2px] max-w-full mq750:flex-wrap">
          <div className="relative leading-[28px] inline-block min-w-[96px] mq450:text-xl mq450:leading-[22px]">
            @kingjack
          </div>
          <div className="relative leading-[28px] text-text-disabled inline-block min-w-[8px] mq450:text-xl mq450:leading-[22px] mq750:w-full mq750:h-2 mq450:invisible	">
            •
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
            <div className="relative leading-[28px] mq450:text-xl mq450:leading-[22px]">
              Senior Product Designer
            </div>
            <div className="relative leading-[28px] text-text-secondary inline-block min-w-[19px] mq450:text-xl mq450:leading-[22px]">
              at
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] mq450:mt-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
              <div className="relative leading-[28px] inline-block min-w-[82px] mq450:text-xl mq450:leading-[22px]">
                Webflow
              </div>
            </div>
            <div className="mq450:flex mq450:gap-3 mq450:mt-[10px]">
              <div className="relative leading-[28px] text-text-disabled inline-block min-w-[8px] mq450:text-xl mq450:leading-[22px] mq750:w-full mq750:h-2">
                •
              </div>
              <div className="relative leading-[28px] text-text-secondary inline-block min-w-[73px] mq450:text-xl mq450:leading-[22px]">
                He/Him
              </div>
            </div>
          </div>
        </div>
      </div>
      {isUploaderVisible && (
        <FileUploader
          toggleUploaderVisibility={toggleUploaderVisibility}
          setProfilePicture={setProfilePicture}
          setLenght={setLenght}
          handleSubmitImage={handleSubmitImage}
          openCropModal={openCropModal}
          handleCropImages={handleCropImages}
        />
      )}
      {isCropModalOpen && !isUploaderVisible && (
        <CropModal image={iscropImages} onClose={closeCropModal} />
      )}
    </div>
  );
};

Namedetails.propTypes = {
  className: PropTypes.string,
};

export default Namedetails;

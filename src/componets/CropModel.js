import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import setCanvasPreview from "../setCanvasPreview.js";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const CropModal = ({ onClose, image, onSubmit }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState();
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;
    const initialCrop = makeAspectCrop(
      { unit: "%", width: cropWidthInPercent },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(initialCrop, width, height);
    setCrop(centeredCrop);
  };

  const handleCropConfirm = () => {
    if (imgRef.current && crop) {
      setCanvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height)
      );
      const dataUrl = previewCanvasRef.current.toDataURL();
      setCroppedImage(dataUrl);
    }
  };

  const handleSubmit = () => {
    handleCropConfirm();
    onSubmit(croppedImage);
    console.log(croppedImage);
  };

  return (
    <div className="w-[343px] top-[140px] left-[1137px] absolute rounded-border-radius-rounded-lg-8px bg-background-primary flex flex-col items-start justify-start p-6 box-border gap-[32px] max-w-full z-[3] ml-[-552px] mq450:ml-[-770px] mq450:gap-[16px] mq450:pb-5 mq450:box-border mq825:left-[790px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
          <div className="flex-1 relative leading-[28px] font-semibold inline-block min-w-[121px]">
            Crop your picture
          </div>
          <div
            className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
            onClick={onClose}
          >
            <div className="rounded-rounded flex flex-row items-center justify-center cursor-pointer">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/Button.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-background-primary-inverted flex flex-row items-start justify-start py-0 px-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[290px] flex-1 relative flex justify-center items-center">
            <ReactCrop
              crop={crop}
              circularCrop
              keepSelection
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              aspect={ASPECT_RATIO}
            >
              <img
                ref={imgRef}
                src={image}
                alt="To be cropped"
                style={{ height: "200px", marginTop: "10px" }}
                onLoad={handleImageLoad}
              />
            </ReactCrop>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px] text-base">
        <div
          className="cursor-pointer shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-rounded bg-background-primary flex flex-row items-center justify-center py-[9px] px-[43px] gap-[6px] border-[0.5px] border-solid border-border-primary"
          onClick={onClose}
        >
          <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
            <div className="relative leading-[24px] font-medium inline-block min-w-[51px]">
              Cancel
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="cursor-pointer [border:none] py-padding-2-5-10px px-[37px] bg-background-brand-primary flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-rounded flex flex-row items-center justify-center box-border gap-[6px] min-w-[92px]"
        >
          <div className="flex-1 flex flex-row items-center justify-center py-0 pr-0.5 pl-px">
            <div className="relative text-base leading-[24px] font-medium font-text-base-16-medium text-background-primary text-left inline-block min-w-[62px]">
              Confirm
            </div>
          </div>
        </button>
      </div>
      <canvas
        ref={previewCanvasRef}
        className="mt-4"
        style={{
          display: "none",
          border: "1px solid black",
          objectFit: "contain",
          width: 150,
          height: 150,
        }}
      />
    </div>
  );
};

CropModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default CropModal;

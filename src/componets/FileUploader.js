// src/components/FileUploader.js
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImages, removeImage, clearImages } from "../redux/imageSlice";
import UnifiedImageComponent from "../pages/ProgressImg";
import { crossButton, crossButtonDefault } from "../utils/ImagesAll";

const FileUploader = ({
  toggleUploaderVisibility,
  setProfilePicture,
  handleSubmitImage,
  openCropModal,
  handleCropImages,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const maxImages = 5;
  const fileInputRef = useRef(null);
  const [isHoveringDelete, setIsHoveringCross] = useState(false);
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);
  const [isPregress, setIsPregress] = useState(false);
  useEffect(() => {}, [images]);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsPregress(false);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isPregress]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      uploadFiles(files);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    uploadFiles(files);
  };

  
  const uploadFiles = (files) => {
    if (files.length + images.length > maxImages) {
      setImageError(true);
      return;
    }
    setIsPregress(true);
    setImageError(false);

    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const image = {
            src: e.target.result,
            name: file.name,
            size: file.size,
            progress: 100, 
          };
          resolve(image);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((imagesArray) => {
      dispatch(addImages(imagesArray));
    });
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleCancel = () => {
    dispatch(clearImages());
    setSelectedImage(null);
    setImageError(false);
    toggleUploaderVisibility();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = (index) => {
    dispatch(removeImage(index));
    if (images.length <= maxImages) {
      setImageError(false);
    }
  };
  const handleSetImage = () => {
    handleSubmitImage();
    dispatch(clearImages());
    toggleUploaderVisibility();
    setProfilePicture(selectedImage.src);
  };

  const handleClose = () => {
    dispatch(clearImages());
    toggleUploaderVisibility();
  };

  return (
    <div
      className={`w-max-width-xl-576px !m-[0] top-[180px] left-[480px] absolute rounded-border-radius-rounded-lg-8px bg-background-primary flex flex-col items-start justify-center py-padding-8-32px px-padding-6-24px box-border gap-[32px] max-w-full z-[3] mq450:left-[20px] mq450:top-[200px] mq450:w-[350px] mq975:left-[85px] ${
        dragActive ? "border-2 border-dashed border-primary" : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-xl ">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full mq825:flex-wrap">
          <div className="flex-1 relative leading-[28px] font-medium inline-block min-w-[123px] max-w-full  mq450:leading-[22px] mq450:text-[20px]">
            Upload image(s)
          </div>
          <div
            className="rounded-rounded1 flex flex-row items-center justify-center cursor-pointer"
            onClick={handleClose}
            onMouseEnter={() => setIsHoveringCross(true)}
            onMouseLeave={() => setIsHoveringCross(false)}
          >
            <div className="focus:ring-custom ring-offset-custom ring-opacity-custom ring-width-custom focus:outline-none focus:ring">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 "
                alt=""
                src={isHoveringDelete ? crossButton : crossButtonDefault}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[24px] text-text-secondary">
          You may upload up to 5 images
        </div>
      </div>
      {!imageError && (
        <div
          onClick={triggerFileInput}
          className={`self-stretch rounded-border-radius-rounded-4px bg-background-tertiary flex flex-col items-start justify-start py-[34px] px-0 gap-[20px] text-center text-lg text-text-primary font-text-base-16-medium border-[1px] border-solid border-border-primary cursor-pointer `}
        >
          <div className="self-stretch flex flex-row items-start justify-center">
            <img
              className="h-12 w-12 relative rounded-border-radius-full overflow-hidden shrink-0"
              alt=""
              src="/thumbnail-icons.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="mq450:text-[18px] self-stretch relative leading-[28px] font-medium mq450:w-[250px] mq450:break-words mq450:font-medium mq450:ml-[20px]">
              Click or drag and drop to upload
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-text-secondary">
              PNG, or JPG (Max 5MB)
            </div>
          </div>
        </div>
      )}
      {imageError && (
        <div className="self-stretch rounded-border-radius-rounded-4px bg-background-tertiary flex flex-col items-center justify-center py-3.5 px-0 gap-[2px] text-center text-base text-text-error border-[1px] border-solid border-border-primary">
          <div className="self-stretch relative leading-[24px] font-semibold text-text-error">
            You've reached the image limit
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-text-secondary">
            Remove one or more to upload more images.
          </div>
        </div>
      )}

      {images.length > 0 && (
        <>
          {images.map((image, index) => (
            <UnifiedImageComponent
              showProgress={image.progress < 100}
              key={index}
              image={image.src}
              NAME={image.name}
              size={(image.size / 1024).toFixed(2) + "KB"}
              progress={image.progress}
              isSelected={selectedImage === image}
              onSelect={() => handleSelectImage(image)}
              onDelete={() => handleDeleteImage(index)}
              openCropModal={openCropModal}
              isPregress={isPregress}
              handleCropImages={handleCropImages}
              toggleUploaderVisibility={toggleUploaderVisibility}
            />
          ))}
        </>
      )}
      {images.length > 0 && (
        <div className="self-stretch flex flex-row items-start justify-center gap-[16px] text-text-disabled mq825:flex-wrap">
          <button
            className="focus:ring-custom ring-offset-custom ring-opacity-custom ring-width-custom focus:outline-none focus:ring hover:bg-[#FAFAFA] cursor-pointer py-[9px] px-5 bg-background-primary flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] rounded-rounded2 box-border flex flex-row items-center justify-center gap-[6px] min-w-[166px] border-[0.5px] border-solid border-border-primary"
            onClick={handleCancel}
          >
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/button-placeholdericon6.svg"
            />
            <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
              <div className="relative text-base leading-[24px] font-medium font-text-base-16-medium text-text-primary text-left inline-block min-w-[51px]">
                Cancel
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/button-placeholdericon6.svg"
            />
          </button>
          <div
            className={`mq450:min-w-[300px] rounded-rounded2 flex flex-row items-center justify-center py-padding-2-5-10px px-[77px] gap-[6px] mq450:pl-5 mq450:pr-5 mq450:box-border cursor-pointer  ${
              selectedImage
                ? "bg-background-brand-primary text-white hover:bg-background-hover focus:ring-custom ring-offset-custom ring-opacity-custom ring-width-custom focus:outline-none focus:ring"
                : "bg-background-disabled text-[#A3A3A3]"
            }`}
            onClick={selectedImage ? handleSetImage : null}
          >
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/button-placeholdericon10.svg"
            />
            <div className="flex flex-row items-center justify-center py-0 px-padding-0-5-2px">
              <div className="relative leading-[24px] font-medium inline-block min-w-[98px]">
                Select image
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/button-placeholdericon10.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  toggleUploaderVisibility: PropTypes.func.isRequired,
  setProfilePicture: PropTypes.func.isRequired,
};

export default FileUploader;

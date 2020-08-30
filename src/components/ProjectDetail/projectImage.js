import React from "react";
// Style
import "./projectImage.css";
// Components
import ModalImage from "react-modal-image";

function projectDescriptionImg(props) {
  const url = props.url;
  const alt = props.alt;

  return (
    <ModalImage
      small={url}
      large={url}
      alt={alt}
      hideZoom={true}
      hideDownload={true}
      showRotate={false}
      className="projectImgSmall"
    />
  );
}

export default projectDescriptionImg;

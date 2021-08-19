import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icon = ({ icon, size, onClick, ...rest }) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={icon}
      size={size}
    />
  );
};

export default Icon;

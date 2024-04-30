import * as React from "react";

const LogoRm = ({ className, alt }: ThemedIconProps): JSX.Element => {
  return (
    <svg
      className={className ? className : ""}
      viewBox="0 0 198 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <desc>{alt ? alt : ""}</desc>
      <rect width="33.5323" height="77" fill="#3E3D3D" />
      <rect
        x="38.5"
        y="8.69358"
        width="33.5323"
        height="33.5323"
        fill="#3E3D3D"
      />
      <rect x="86.9358" width="33.5323" height="77" fill="#3E3D3D" />
      <rect x="163.936" width="33.5323" height="77" fill="#3E3D3D" />
      <rect
        x="125.436"
        y="31.0484"
        width="33.5323"
        height="45.9516"
        fill="#3E3D3D"
      />
    </svg>
  );
};

export default LogoRm;

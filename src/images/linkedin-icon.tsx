import * as React from "react";

const LinkedinIcon = ({ className, alt }: ThemedIconProps): JSX.Element => {
  return (
    <svg
      className={className ? className : ""}
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>{alt ? alt : ""}</desc>

      <path
        d="M18.7311 45.3333V26.6667M56.0645 21.3333V42.6667C56.0645 46.2029 54.6597 49.5943 52.1592 52.0948C49.6587 54.5952 46.2673 56 42.7311 56H21.3978C17.8616 56 14.4702 54.5952 11.9697 52.0948C9.46921 49.5943 8.06445 46.2029 8.06445 42.6667V21.3333C8.06445 17.7971 9.46921 14.4057 11.9697 11.9052C14.4702 9.40476 17.8616 8 21.3978 8H42.7311C46.2673 8 49.6587 9.40476 52.1592 11.9052C54.6597 14.4057 56.0645 17.7971 56.0645 21.3333Z"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3978 45.3333V36.6667M29.3978 36.6667V26.6667M29.3978 36.6667C29.3978 26.6667 45.3978 26.6667 45.3978 36.6667V45.3333M18.7311 18.6933L18.7578 18.664"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkedinIcon;

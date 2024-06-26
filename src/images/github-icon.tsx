import * as React from "react";

const GithubIcon = ({ className, alt }: ThemedIconProps): JSX.Element => {
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
        d="M32.0644 58.6666C46.7924 58.6666 58.7311 46.728 58.7311 32C58.7311 17.272 46.7924 5.33331 32.0644 5.33331C17.3364 5.33331 5.39777 17.272 5.39777 32C5.39777 46.728 17.3364 58.6666 32.0644 58.6666Z"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.2858 50.6666V45.6986C38.3524 44.872 38.2378 44.0453 37.9498 43.264C37.6598 42.4822 37.2051 41.7719 36.6164 41.1813C42.1978 40.576 48.0644 38.5146 48.0644 29.064C48.0593 26.6348 47.1019 24.3044 45.3978 22.5733C46.2088 20.4616 46.1513 18.1147 45.2378 16.0453C45.2378 16.0453 43.1391 15.44 38.2858 18.608C34.2079 17.5329 29.921 17.5329 25.8431 18.608C20.9898 15.44 18.8911 16.048 18.8911 16.048C17.979 18.1159 17.9215 20.4605 18.7311 22.5706C17.0151 24.3146 16.0568 26.6654 16.0644 29.112C16.0644 38.496 21.9311 40.5546 27.5124 41.2293C26.9302 41.8147 26.4793 42.5174 26.1898 43.2906C25.9024 44.0581 25.7841 44.8786 25.8431 45.696V50.6666"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.8431 47.2053C20.5098 48.888 16.0644 47.2053 13.3978 42.0106"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GithubIcon;

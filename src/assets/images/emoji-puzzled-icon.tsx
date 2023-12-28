// iconoir_emoji_puzzled
const EmojiPuzzledIcon = ({ className, alt }: ThemedIconProps): JSX.Element => {
  return (
    <svg
      className={className ? className : ""}
      width="180"
      height="181"
      viewBox="0 0 180 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>{alt ? alt : ""}</desc>
      <path
        d="M0.833252 91C0.833252 140.247 40.7532 180.167 89.9999 180.167C139.247 180.167 179.167 140.247 179.167 91C179.167 41.7533 139.247 1.83334 89.9999 1.83334"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85.5417 122.208C85.5417 122.208 98.9167 104.375 125.667 104.375C152.417 104.375 165.792 122.208 165.792 122.208M9.75 19.6667C9.75 -4.88983 45.4167 -4.88983 45.4167 19.6667C45.4167 37.2058 27.5833 34.29 27.5833 55.3333M27.5833 82.1725L27.6725 82.0744"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M139.042 64.25C137.859 64.25 136.725 63.7803 135.889 62.9442C135.053 62.1081 134.583 60.9741 134.583 59.7917C134.583 58.6093 135.053 57.4753 135.889 56.6392C136.725 55.8031 137.859 55.3333 139.042 55.3333C140.224 55.3333 141.358 55.8031 142.194 56.6392C143.03 57.4753 143.5 58.6093 143.5 59.7917C143.5 60.9741 143.03 62.1081 142.194 62.9442C141.358 63.7803 140.224 64.25 139.042 64.25ZM76.6248 64.25C75.4424 64.25 74.3084 63.7803 73.4723 62.9442C72.6362 62.1081 72.1665 60.9741 72.1665 59.7917C72.1665 58.6093 72.6362 57.4753 73.4723 56.6392C74.3084 55.8031 75.4424 55.3333 76.6248 55.3333C77.8073 55.3333 78.9413 55.8031 79.7774 56.6392C80.6135 57.4753 81.0832 58.6093 81.0832 59.7917C81.0832 60.9741 80.6135 62.1081 79.7774 62.9442C78.9413 63.7803 77.8073 64.25 76.6248 64.25Z"
        fill="#3E3D3D"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmojiPuzzledIcon;
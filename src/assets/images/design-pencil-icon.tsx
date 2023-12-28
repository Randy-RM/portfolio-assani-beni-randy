//design-pencil-icon.tsx
const DesignPencilIcon = ({ className, alt }: ThemedIconProps): JSX.Element => {
  return (
    <svg
      className={className ? className : ""}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>{alt ? alt : ""}</desc>
      <path
        d="M46 1C21.1465 1 1 21.1465 1 46C1 70.8535 21.1465 91 46 91C70.8535 91 91 70.8535 91 46C91 21.1465 70.8535 1 46 1Z"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 87.256V55L46 23.5L64 55V87.256"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 55C28 55 33.0715 59.5 37 59.5C40.9285 59.5 46 55 46 55C46 55 51.0715 59.5 55 59.5C58.9285 59.5 64 55 64 55"
        stroke="#3E3D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DesignPencilIcon;

import * as React from "react";

const Badge = (props: BadgeProps): JSX.Element => {
  let { badgeText } = props;
  badgeText = badgeText || "";

  return (
    <>
      <span className="bg-tertiary-color text-center badge font-w-semi-bold standard-radius">
        {`${badgeText}`}
      </span>
    </>
  );
};

export default Badge;

const Badge = (props: BadgeProps): JSX.Element => {
  let { badgeText } = props;
  badgeText = badgeText || "";

  return (
    <>
      <span className="bg-mid-grey text-center badge font-w-semi-bold standard-radius">
        {`${badgeText}`}
      </span>
    </>
  );
};

export default Badge;

import * as React from "react";

const Spacer = (props: SpacerProps): JSX.Element => {
  let { height } = props;
  height = height || 1;

  return <div style={{ height: `${height}rem` }}></div>;
};

export default Spacer;

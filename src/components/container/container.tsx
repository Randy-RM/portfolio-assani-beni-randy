import * as React from "react";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks";

const Container = (props: ContainerProps): JSX.Element => {
  let { flexDirection, justifyContent, alignItems, flexWrap } = props;
  const { children } = props;

  const [direction, setDirection] = useState<direction>(null);

  const [width] = useWindowSize();

  flexDirection = flexDirection || "column";
  justifyContent = justifyContent || "flex-start";
  alignItems = alignItems || "flex-start";
  flexWrap = flexWrap || "nowrap";

  useEffect(() => {
    if (width < 768) {
      setDirection("column");
    } else {
      setDirection(null);
    }
  }, [width]);

  return (
    <div>
      <div>
        <div
          style={{
            display: `flex`,
            flexDirection: `${!direction ? flexDirection : direction}`,
            justifyContent: `${justifyContent}`,
            alignItems: `${alignItems}`,
            flexWrap: `${flexWrap}`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;

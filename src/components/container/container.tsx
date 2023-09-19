import { ReactNode, useState, useEffect } from "react";
import useWindowSize from "../../hooks/use-window-size";

interface ContainerProps {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems?: "flex-start" | "stretch" | "flex-end" | "center";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  children?: ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
  let { flexDirection, justifyContent, alignItems, flexWrap } = props;
  const { children } = props;

  const [direction, setDirection] = useState<
    "row" | "row-reverse" | "column" | "column-reverse" | null
  >(null);

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

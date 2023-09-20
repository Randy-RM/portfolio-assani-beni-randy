interface SpacerProps {
  height?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Spacer = (props: SpacerProps): JSX.Element => {
  let { height } = props;
  height = height || 1;

  return <div style={{ height: `${height}rem` }}></div>;
};

export default Spacer;

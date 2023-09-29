const InputHelperMessage = (props: InputStatus): JSX.Element => {
  const { status, message } = props;

  switch (status) {
    case "succes":
      return (
        <span className="input-message font-success-color">{message}</span>
      );
    case "error":
      return <span className="input-message font-danger-color">{message}</span>;
    case "none":
      return <span className="input-message font-none">{message}</span>;
    default:
      return <span className="input-message font-none">{message}</span>;
  }
};

export default InputHelperMessage;

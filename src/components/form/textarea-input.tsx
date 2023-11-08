import InputHelperMessage from "./input-helper-message";

const TextareaInput = (props: TextareaInputProps): JSX.Element => {
  let { id, name, placeholder, inputStatus, rows, cols, reff } = props;
  const { label } = props;

  id = id || "";
  name = name || "";
  placeholder = placeholder || "";
  inputStatus = inputStatus || { status: "none", message: "none" };
  rows = rows || 4;
  cols = cols || 50;
  reff = reff || null;

  return (
    <>
      <div className="input">
        {label && label.length != 0 && (
          <>
            <label className="font-w-extra-bold" htmlFor={id}>
              {label}
            </label>
            <br />
          </>
        )}
        <textarea
          id={id}
          name={name}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          ref={reff}
        ></textarea>
        <br />
        <InputHelperMessage
          status={inputStatus.status}
          message={inputStatus.message}
        />
      </div>
    </>
  );
};

export default TextareaInput;

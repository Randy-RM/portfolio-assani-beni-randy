import InputHelperMessage from "./input-helper-message";

const BasicInput = (props: BasicInputProps): JSX.Element => {
  let { type, id, name, placeholder, inputStatus } = props;
  const { label, registerToForm } = props;

  type = type || "text";
  id = id || "";
  name = name || "";
  placeholder = placeholder || "";
  inputStatus = inputStatus || { status: "none", message: "none" };

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
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          {...registerToForm(name)}
        />
        <br />
        <InputHelperMessage
          status={inputStatus.status}
          message={inputStatus.message}
        />
      </div>
    </>
  );
};

export default BasicInput;

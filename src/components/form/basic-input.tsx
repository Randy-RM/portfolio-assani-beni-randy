import InputHelperMessage from "./input-helper-message";

interface InputStatus {
  status: "none" | "succes" | "error";
  message: string;
}

interface BasicInputProps {
  type?: "text" | "email" | "url" | "number" | "password";
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  inputStatus?: InputStatus;
}

const BasicInput = (props: BasicInputProps): JSX.Element => {
  let { type, id, name, placeholder, inputStatus } = props;
  const { label } = props;

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
            <label className="font-w-extra-bold" htmlFor="name">
              {label}
            </label>
            <br />
          </>
        )}
        <input type={type} name={name} id={id} placeholder={placeholder} />
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

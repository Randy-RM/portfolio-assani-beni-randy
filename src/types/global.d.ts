/**
 * Represents flex direction.
 * @type {direction: "row" | "row-reverse" | "column" | "column-reverse" | null }
 */
declare type direction =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse"
  | null;

/**
 * Represents Input Status properties.
 * @interface
 * @type {status: "none" | "succes" | "error" }
 * @type {message:  string }
 */
declare interface InputStatus {
  status: "none" | "succes" | "error";
  message: string;
}

/**
 * Represents Basic Input properties.
 * @interface
 * @type {type: "text" | "email" | "url" | "number" | "password"| undefined }
 * @type {label:  string | undefined }
 * @type {id: string | undefined }
 * @type {name:  string | undefined }
 * @type {placeholder: string | undefined }
 * @type {inputStatus: InputStatus | undefined }
 */
declare interface BasicInputProps {
  type?: "text" | "email" | "url" | "number" | "password";
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  inputStatus?: InputStatus;
  registerToForm?: UseFormRegister<FieldValues>;
}

/**
 * Represents Basic Textarea properties.
 * @interface
 * @type {label:  string | undefined }
 * @type {id: string | undefined }
 * @type {name:  string | undefined }
 * @type {placeholder: string | undefined }
 * @type {inputStatus: InputStatus | undefined }
 * @type {rows: number | undefined }
 * @type {cols: number | undefined }
 */
declare interface TextareaInputProps {
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  inputStatus?: InputStatus;
  rows?: number;
  cols?: number;
  registerToForm?: UseFormRegister<FieldValues>;
}

/**
 * Represents Container properties.
 * @interface
 * @type {flexDirection: "row" | "row-reverse" | "column" | "column-reverse"| undefined }
 * @type {justifyContent: "flex-start" | "flex-end"| "center"| "space-around"| "space-between"| "space-evenly"| undefined }
 * @type {alignItems: "flex-start" | "stretch" | "flex-end" | "center"| undefined }
 * @type {flexWrap: "nowrap" | "wrap" | "wrap-reverse"| undefined }
 * @type {children: ReactNode | any}
 */
declare interface ContainerProps {
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

/**
 * Represents Badge properties.
 * @interface
 * @type {badgeText: string}
 */
declare interface BadgeProps {
  badgeText?: string;
}

/**
 * Represents vertical Space properties.
 * @interface
 * @type {height: number}
 */
declare interface SpacerProps {
  height?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Represents Project.
 * @interface
 * @type {projectName:  string | undefined }
 * @type {projectDescription: string | undefined }
 * @type {projectSkills:  string[] | undefined }
 * @type {projectImageUrl: string | undefined }
 * @type {flexWrap: "personal"| "other" | undefined }
 */
declare interface Project {
  idProject?: string | null;
  projectName: string | null;
  projectDescription: string | null;
  projectSkills?: string[] | null;
  projectImageUrl?: string | null;
  projectType?: "personal" | "other" | null;
  projectUrl?: string | null;
}

type ContactMeFormData = {
  contactName: string;
  contactMail: string;
  contactMessage: string;
};

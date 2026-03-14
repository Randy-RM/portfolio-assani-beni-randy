/**
 * Represents flex direction.
 */
declare type direction =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse"
  | null;

/**
 * Represents Input Status properties.
 */
declare interface InputStatus {
  status: "none" | "succes" | "error";
  message: string;
}

/**
 * Represents Basic Input properties.
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
 * Represents reusable Button input properties.
 */
declare interface ButtonInputProps {
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  tapScale?: number;
  tapStiffness?: number;
  tapDamping?: number;
}

/**
 * Represents Container properties.
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
 */
declare interface BadgeProps {
  badgeText?: string;
}

/**
 * Represents vertical Space properties.
 */
declare interface SpacerProps {
  height?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Represents Project card properties.
 * Note: projectImageUrl est maintenant une URL string (plus de GatsbyImageData).
 */
declare interface Project {
  idProject?: string | null;
  projectName: string | null;
  projectDescription: string | null;
  projectSkills?: string[] | null;
  projectImageUrl?: string | null;
  projectType?: "personal" | "customer" | "other" | null;
  projectUrl?: string | null;
}

/**
 * Represents contact form data message.
 */
declare type ContactMeFormData = {
  contactName: string;
  contactMail: string;
  contactMessage: string;
};

/**
 * Represents Modal status message response.
 */
declare type ModalStatus = "none" | "progress" | "succes" | "warning" | "error";

/**
 * Represents theme icon style.
 */
declare type ThemedIconProps = {
  className?: string;
  alt?: string;
};

/**
 * Type union for project classification.
 */
type ProjectType = "personal" | "customer" | "other";

import Typography from "./Typography";
import { cva } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  name?: string;
  value?: string;
  handleChange?: (e: any) => void;
  size?: "medium" | "large";
}

const labelStyles = vstack({
  alignItems: "start",
  gap: "8px",
});

const inputStyles = cva({
  base: {
    outline: "none",
    border: "2px solid",
    boxSizing: "border-box",
    borderRadius: "30px",
    p: "16px 0 16px 20px",
    height: "52px",
  },
  variants: {
    hasValue: {
      true: { borderColor: "oddu_green01" },
      false: { borderColor: "oddu_black03" },
    },
    size: {
      large: { width: "335px" },
      medium: { width: "225px" },
    },
  },
});

const LabelInput = ({
  id,
  label,
  placeholder,
  type,
  name,
  value,
  size = "large",
  handleChange,
}: Props) => {
  return (
    <label htmlFor={id} className={labelStyles}>
      <Typography.H4>{label}</Typography.H4>
      <input
        placeholder={placeholder}
        id={id}
        className={inputStyles({ hasValue: !!value, size })}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default LabelInput;

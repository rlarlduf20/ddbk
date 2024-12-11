import Typography from "./Typography";
import { css, cva } from "../../../styled-system/css";
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
  error?: boolean | null;
  errorText?: string;
}

const labelStyles = vstack({
  position: "relative",
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
    error: {
      true: { borderColor: "oddu_red01" },
      false: {},
    },
  },
});

const errorTextStyles = css({
  position: "absolute",
  left: "21px",
  bottom: "-20px",
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
  error,
  errorText,
}: Props) => {
  return (
    <label htmlFor={id} className={labelStyles}>
      <Typography.H4>{label}</Typography.H4>
      <input
        placeholder={placeholder}
        id={id}
        className={inputStyles({ hasValue: !!value, size, error: !!error })}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {!!error && (
        <div className={errorTextStyles}>
          <Typography.SpanCaption color="oddu_red01">
            {errorText}
          </Typography.SpanCaption>
        </div>
      )}
    </label>
  );
};

export default LabelInput;

import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";
import Typography from "./Typography";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

const labelStyles = vstack({
  alignItems: "start",
  gap: "8px",
});

const inputStyles = css({
  outline: "none",
  border: "2px solid",
  boxSizing: "border-box",
  borderColor: "oddu_black03",
  borderRadius: "30px",
  p: "16px 0 16px 20px",
  height: "52px",
  width: "335px",
});

const LabelInput = ({ id, label, placeholder, type }: Props) => {
  return (
    <label htmlFor={id} className={labelStyles}>
      <Typography.H4>{label}</Typography.H4>
      <input
        placeholder={placeholder}
        id={id}
        className={inputStyles}
        type={type}
      />
    </label>
  );
};

export default LabelInput;

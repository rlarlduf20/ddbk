import Typography from "./Typography";
import { cva } from "../../../styled-system/css";

const buttonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    boxSizing: "border-box",
  },
  variants: {
    color: {
      oddu_black03: { bgColor: "oddu_black03" },
      oddu_green01: { bgColor: "oddu_green01" },
    },
    size: {
      large: { width: "335px", height: "60px" },
      medium: { width: "164px", height: "60px" },
      small: { width: "100px", height: "52px" },
    },
    rounded: {
      true: { borderRadius: "50%" },
      false: { borderRadius: "30px" },
    },
    outline: {
      true: { border: "2px solid" },
      false: { border: "none" },
    },
  },
  compoundVariants: [
    {
      outline: true,
      color: "oddu_black03",
      css: { borderColor: "oddu_black03", bgColor: "oddu_white01" },
    },
    {
      outline: true,
      color: "oddu_green01",
      css: { borderColor: "oddu_green01", bgColor: "oddu_white01" },
    },
  ],
});

interface ButtonProps {
  color?: "oddu_green01" | "oddu_black03";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  outline?: boolean;
  children: React.ReactNode;
  handleClick?: any;
  type?: string;
  disabled?: boolean;
}

const Button = ({
  color = "oddu_black03",
  size = "medium",
  rounded = false,
  outline = false,
  children,
  handleClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={buttonStyles({ color, size, rounded, outline })}
      onClick={handleClick}
      disabled={disabled}
    >
      <Typography.PMedium color={outline ? color : "oddu_white01"}>
        {children}
      </Typography.PMedium>
    </button>
  );
};

export default Button;

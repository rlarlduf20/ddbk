import Typography from "./Typography";
import { cva } from "../../../styled-system/css";

const buttonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
  },
  variants: {
    color: {
      oddu_black03: { bgColor: "oddu_black03" },
      oddu_green01: { color: "oddu_green01" },
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
  },
});

interface ButtonProps {
  color?: "oddu_green01" | "oddu_black03";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  children: React.ReactNode;
  handleClick: any;
}

const Button = ({
  color = "oddu_black03",
  size = "medium",
  rounded = false,
  children,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles({ color, size, rounded })}
      onClick={handleClick}
    >
      <Typography.PMedium color="oddu_white01">{children}</Typography.PMedium>
    </button>
  );
};

export default Button;

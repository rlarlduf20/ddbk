import { cva } from "../../../styled-system/css";

// 버튼 스타일 정의
const buttonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    padding: "8px 16px",
  },
  variants: {
    visual: {
      outline: {
        bg: "white",
        border: "1px solid black",
      },
    },
    color: {
      main_pink: { color: "main_pink" },
      main_green: { color: "main_green" },
      black: { color: "black" },
      white: { color: "white" },
    },
    size: {
      small: { fontSize: "12px", padding: "4px 8px" },
      medium: { fontSize: "16px", padding: "8px 16px" },
      large: { fontSize: "20px", padding: "12px 24px" },
    },
    rounded: {
      true: { borderRadius: "50%" },
      false: { borderRadius: "4px" },
    },
  },
});

interface ButtonProps {
  color?: "main_pink" | "main_green" | "black" | "white";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  visual?: "outline";
  children: React.ReactNode;
}

// 동적으로 스타일을 관리하는 버튼 컴포넌트
const Button = ({
  color = "black",
  size = "medium",
  rounded = false,
  children,
  visual,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles({ color, size, rounded, visual })}
    >
      {children}
    </button>
  );
};

export default Button;

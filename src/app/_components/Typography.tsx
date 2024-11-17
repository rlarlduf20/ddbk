import { cva } from "../../../styled-system/css";

interface Props {
  children: React.ReactNode;
  color?: "main_pink" | "main_green" | "black" | "white";
}

const colorVariants = {
  main_pink: { color: "main_pink" },
  main_green: { color: "main_green" },
  black: { color: "#000000" },
  white: { color: "#FFFFFF" },
};

const typographyStyles = {
  h1: cva({
    base: {
      fontSize: "32px",
      fontWeight: 700,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h2: cva({
    base: {
      fontSize: "28px",
      fontWeight: 700,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h3: cva({
    base: {
      fontSize: "24px",
      fontWeight: 600,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h4: cva({
    base: {
      fontSize: "24px",
      fontWeight: 500,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h5: cva({
    base: {
      fontSize: "20px",
      fontWeight: 500,
    },
    variants: {
      color: colorVariants,
    },
  }),
  pLarge: cva({
    base: {
      fontSize: "20px",
      fontWeight: 400,
    },
    variants: {
      color: colorVariants,
    },
  }),
  pMedium: cva({
    base: {
      fontSize: "16px",
      fontWeight: 400,
    },
    variants: {
      color: colorVariants,
    },
  }),
  pSmall: cva({
    base: {
      fontSize: "12px",
      fontWeight: 400,
    },
    variants: {
      color: colorVariants,
    },
  }),
};

// 컴포넌트 정의
const Typography = {
  H1: ({ children, color = "black" }: Props) => (
    <h1 className={typographyStyles.h1({ color })}>{children}</h1>
  ),
  H2: ({ children, color = "black" }: Props) => (
    <h2 className={typographyStyles.h2({ color })}>{children}</h2>
  ),
  H3: ({ children, color = "black" }: Props) => (
    <h3 className={typographyStyles.h3({ color })}>{children}</h3>
  ),
  H4: ({ children, color = "black" }: Props) => (
    <h4 className={typographyStyles.h4({ color })}>{children}</h4>
  ),
  H5: ({ children, color = "black" }: Props) => (
    <h5 className={typographyStyles.h5({ color })}>{children}</h5>
  ),
  PLarge: ({ children, color = "black" }: Props) => (
    <p className={typographyStyles.pLarge({ color })}>{children}</p>
  ),
  PMedium: ({ children, color = "black" }: Props) => (
    <p className={typographyStyles.pMedium({ color })}>{children}</p>
  ),
  PSmall: ({ children, color = "black" }: Props) => (
    <p className={typographyStyles.pSmall({ color })}>{children}</p>
  ),
};

export default Typography;

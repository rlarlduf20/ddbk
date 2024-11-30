import { cva } from "../../../styled-system/css";

interface Props {
  children: React.ReactNode;
  color?: "oddu_white01" | "oddu_green01" | "oddu_black01";
}

const colorVariants = {
  oddu_white01: { color: "oddu_white01" },
  oddu_green01: { color: "oddu_green01" },
  oddu_black01: { color: "oddu_black01" },
};

const typographyStyles = {
  h1: cva({
    base: {
      fontSize: "24px",
      fontWeight: 700,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h2: cva({
    base: {
      fontSize: "20px",
      fontWeight: 700,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h3: cva({
    base: {
      fontSize: "18px",
      fontWeight: 600,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h4: cva({
    base: {
      fontSize: "16px",
      fontWeight: 600,
    },
    variants: {
      color: colorVariants,
    },
  }),
  h5: cva({
    base: {
      fontSize: "14px",
      fontWeight: 600,
    },
    variants: {
      color: colorVariants,
    },
  }),
  pLarge: cva({
    base: {
      fontSize: "16px",
      fontWeight: 500,
    },
    variants: {
      color: colorVariants,
    },
  }),
  pMedium: cva({
    base: {
      fontSize: "14px",
      fontWeight: 500,
    },
    variants: {
      color: colorVariants,
    },
  }),
  pSmall: cva({
    base: {
      fontSize: "12px",
      fontWeight: 500,
    },
    variants: {
      color: colorVariants,
    },
  }),
  spanButton: cva({
    base: {
      fontSize: "14px",
      fontWeight: 600,
    },
    variants: {
      color: colorVariants,
    },
  }),
  spanCaption: cva({
    base: {
      fontSize: "10px",
      fontWeight: 500,
    },
    variants: {
      color: colorVariants,
    },
  }),
};

// 컴포넌트 정의
const Typography = {
  H1: ({ children, color = "oddu_black01" }: Props) => (
    <h1 className={typographyStyles.h1({ color })}>{children}</h1>
  ),
  H2: ({ children, color = "oddu_black01" }: Props) => (
    <h2 className={typographyStyles.h2({ color })}>{children}</h2>
  ),
  H3: ({ children, color = "oddu_black01" }: Props) => (
    <h3 className={typographyStyles.h3({ color })}>{children}</h3>
  ),
  H4: ({ children, color = "oddu_black01" }: Props) => (
    <h4 className={typographyStyles.h4({ color })}>{children}</h4>
  ),
  H5: ({ children, color = "oddu_black01" }: Props) => (
    <h5 className={typographyStyles.h5({ color })}>{children}</h5>
  ),
  PLarge: ({ children, color = "oddu_black01" }: Props) => (
    <p className={typographyStyles.pLarge({ color })}>{children}</p>
  ),
  PMedium: ({ children, color = "oddu_black01" }: Props) => (
    <p className={typographyStyles.pMedium({ color })}>{children}</p>
  ),
  PSmall: ({ children, color = "oddu_black01" }: Props) => (
    <p className={typographyStyles.pSmall({ color })}>{children}</p>
  ),
  SpanButton: ({ children, color = "oddu_black01" }: Props) => (
    <span className={typographyStyles.pSmall({ color })}>{children}</span>
  ),
  SpanCaption: ({ children, color = "oddu_black01" }: Props) => (
    <span className={typographyStyles.pSmall({ color })}>{children}</span>
  ),
};

export default Typography;

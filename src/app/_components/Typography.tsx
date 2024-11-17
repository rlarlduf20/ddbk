import { cva } from "../../../styled-system/css";

// 공통 스타일 정의
const typographyStyles = {
  h1: cva({
    base: {
      fontSize: "32px",
      fontWeight: 700,
    },
  }),
  h2: cva({
    base: {
      fontSize: "28px",
      fontWeight: 700,
    },
  }),
  h3: cva({
    base: {
      fontSize: "24px",
      fontWeight: 600,
    },
  }),
  h4: cva({
    base: {
      fontSize: "24px",
      fontWeight: 500,
    },
  }),
  h5: cva({
    base: {
      fontSize: "20px",
      fontWeight: 500,
    },
  }),
  pLarge: cva({
    base: {
      fontSize: "20px",
      fontWeight: 400,
    },
  }),
  pMedium: cva({
    base: {
      fontSize: "16px",
      fontWeight: 400,
    },
  }),
  pSmall: cva({
    base: {
      fontSize: "12px",
      fontWeight: 400,
    },
  }),
};

// 컴포넌트 정의
const Typography = {
  H1: ({ children }: { children: React.ReactNode }) => (
    <h1 className={typographyStyles.h1()}>{children}</h1>
  ),
  H2: ({ children }: { children: React.ReactNode }) => (
    <h2 className={typographyStyles.h2()}>{children}</h2>
  ),
  H3: ({ children }: { children: React.ReactNode }) => (
    <h3 className={typographyStyles.h3()}>{children}</h3>
  ),
  H4: ({ children }: { children: React.ReactNode }) => (
    <h4 className={typographyStyles.h4()}>{children}</h4>
  ),
  H5: ({ children }: { children: React.ReactNode }) => (
    <h5 className={typographyStyles.h5()}>{children}</h5>
  ),
  PLarge: ({ children }: { children: React.ReactNode }) => (
    <p className={typographyStyles.pLarge()}>{children}</p>
  ),
  PMedium: ({ children }: { children: React.ReactNode }) => (
    <p className={typographyStyles.pMedium()}>{children}</p>
  ),
  PSmall: ({ children }: { children: React.ReactNode }) => (
    <p className={typographyStyles.pSmall()}>{children}</p>
  ),
};

export default Typography;

import { styled } from "../../../styled-system/jsx";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;

const StyledButton = styled("button", {
  base: {
    width: "150px",
    height: "80px",
    backgroundColor: "lightgreen",
    borderRadius: "10px",
  },
});

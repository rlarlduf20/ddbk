interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <button type="button">{children}</button>;
};

export default Button;

import { Button as MUIButton, ButtonProps } from "@mui/material";

type Props = { label: string } & ButtonProps;

const Button = ({ label, ...inputProps }: Props) => {
  return (
    <MUIButton {...inputProps} variant="contained">
      {label}
    </MUIButton>
  );
};

export default Button;

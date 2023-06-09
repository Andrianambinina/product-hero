import {
  styled,
  TextField as MUITextField,
  TextFieldProps
} from "@mui/material";

const StyledTextField = styled(MUITextField)(({ theme }) => ({
  // "& .MuiInputLabel-root": {
  // color: theme.palette.grey[300],
  // fontSize: 18,
  // },
  "& label.Mui-focused": {
    // fontSize: 10,
    fontWeight: 400,
    color: theme.palette.grey[800]
  },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "none"
  // },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${theme.palette.grey[800]}`,
      // fontSize: 15,
      borderRadius: 6,
      transition: "all 0.125s ease 0s"
    },
    "& .MuiOutlinedInput-input": {
      color: "theme.palette.grey[800]",
      "&::placeholder": {
        color: theme.palette.grey[300],
        fontSize: 14,
        opacity: 1
      }
    },
    "& .MuiInputLabel-shrink": {
      backgroundColor: "red"
    },
    // "&:hover fieldset": {
    //   border: `1px solid ${theme.palette.grey[300]}`,
    //   backgroundColor: "none"
    // },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.grey[800]}`
    }
  }
}));

// Need this later
type Props = {
  fullWidth?: boolean;
} & TextFieldProps;

const TextField = ({ fullWidth = true, ...inputProps }: Props) => {
  return (
    <StyledTextField {...inputProps} variant="outlined" fullWidth={fullWidth} />
  );
};

export default TextField;

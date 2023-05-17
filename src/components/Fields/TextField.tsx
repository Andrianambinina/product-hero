import { styled, TextField as MUITextField } from "@mui/material";

const StyledTextField = styled(MUITextField)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[800]}`,
  borderRadius: 6,
  "& .MuiInputLabel-root": {
    color: "#fff",
    fontSize: 18
  },
  "& label.Mui-focused": {
    color: "#fff"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "none"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid rgba(225, 225, 255, 0.27)",
      fontSize: 15,
      borderRadius: 6,
      transition: "all 0.125s ease 0s"
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff",
      "&::placeholder": {
        color: "yellow",
        opacity: 1
      }
    },
    "&:hover fieldset": {
      border: "1px solid rgba(225, 225, 255, 0.4)",
      backgroundColor: "rgba(185, 216, 233, 0.07)"
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main
    }
  }
}));

const TextField = ({ label, placeholder }) => {
  return (
    <StyledTextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeholder}
    />
  );
};

export default TextField;

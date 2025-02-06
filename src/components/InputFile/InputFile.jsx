import { TextField } from "@mui/material";

const InputFile = ({ label, sx, ...props }) => {
  return (
    <TextField
      type='file'
      variant='outlined'
      fullWidth
      inputProps={{ accept: "image/*" }}
      sx={{ display: "block", ...sx }}
      {...props}
    />
  );
};

export default InputFile;

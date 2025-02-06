import { TextField } from "@mui/material";

const InputText = ({
  label,
  name,
  register,
  errors,
  sx,
  validation,
  multiline,
  minRows,
  InputProps,
  type,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      sx={{ ...sx }}
      {...register(name, validation)}
      multiline={multiline}
      minRows={multiline ? minRows : undefined}
      type={type}
      InputProps={InputProps}
    />
  );
};

export default InputText;

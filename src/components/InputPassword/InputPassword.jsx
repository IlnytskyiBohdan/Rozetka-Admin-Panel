import { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputText from "../InputText/InputText";

const InputPassword = ({ register, errors, sx }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputText
      label='Password'
      name='password'
      register={register}
      errors={errors}
      sx={sx}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={handleTogglePassword} edge='end'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputPassword;

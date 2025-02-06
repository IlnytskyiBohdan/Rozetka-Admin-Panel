import { Button, CircularProgress } from "@mui/material";

const CustomButton = ({
  type = "button",
  children,
  variant = "contained",
  color = "success",
  disabled = false,
  loading = false,
  onClick,
  sx = {},
  startIcon,
  fullWidth = true,
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      sx={{
        fontSize: "20px",
        fontWeight: "600",
        textTransform: "none",
        ...sx,
      }}
      startIcon={startIcon}>
      {loading ? <CircularProgress size={24} color='inherit' /> : children}
    </Button>
  );
};

export default CustomButton;

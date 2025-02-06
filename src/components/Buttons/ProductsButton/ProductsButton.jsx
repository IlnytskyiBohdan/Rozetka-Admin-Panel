import CustomButton from "../CustomButton/CustomButton";

const ProductsButton = ({ children, startIcon, onClick, sx = {} }) => {
  return (
    <CustomButton
      color='inherit'
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        backgroundColor: "white",
        color: "green",
        width: "200px",
        height: "50px",
        "&:hover": { backgroundColor: "#f5f5f5" },
        ...sx,
      }}>
      {children}
    </CustomButton>
  );
};

export default ProductsButton;

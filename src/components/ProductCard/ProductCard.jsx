import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ backgroundColor: "white", padding: 2, boxShadow: 3, textAlign: "center" }}>
      <img
        src={`${import.meta.env.BASE_URL}lenovo-laptop-y50.png`}
        alt={product.name}
        style={{ width: "100%", maxHeight: "200px" }}
      />

      <CardContent>
        <Typography variant='h6' fontWeight='bold'>
          {product.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            paddingBottom: 2,
          }}>
          <Typography variant='h5' color='error' fontWeight='bold'>
            {product.price}₴
          </Typography>
          <Typography>Кількість: {product.quantity}</Typography>
        </Box>

        <Button color='success' sx={{ fontWeight: "bold" }}>
          <ShoppingCartIcon color='success' />
          Готовий до відправки
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

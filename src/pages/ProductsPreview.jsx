import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductsButton from "../components/Buttons/ProductsButton/ProductsButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useProducts from "../hooks/useProducts";

const ProductsPreview = () => {
  const { products, status } = useProducts();

  const navigate = useNavigate();

  const handleBackClick = () => navigate("/products-table");

  if (status === "loading") return <Typography>Loading...</Typography>;
  if (status === "failed") return <Typography>Error loading products</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <ProductsButton
        onClick={handleBackClick}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 5, width: "100px" }}>
        Back
      </ProductsButton>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPreview;

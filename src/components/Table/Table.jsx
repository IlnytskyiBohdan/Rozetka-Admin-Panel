import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  fetchProducts,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../../redux/slices/sliceProducts";
import { AccountCircle, Add } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "../DeleteDialog/DeletDialog";
import ProductForm from "../ProductForm/ProductForm";
import useProducts from "../../hooks/useProducts";
import useSortedProducts from "../../hooks/useSortedProducts";
import SortableTableHeader from "../SortableTableHeader/SortableTableHeader";
import ProductsButton from "../Buttons/ProductsButton/ProductsButton";


const columns = [
  { key: "category", label: "Category", isNumeric: false },
  { key: "name", label: "Name", isNumeric: false },
  { key: "quantity", label: "Quantity", isNumeric: true },
  { key: "price", label: "Price (₴)", isNumeric: true },
];

const ProductsTable = () => {
  const { products, status, error } = useProducts();
  const { sortedProducts, handleSort, sortConfig } = useSortedProducts(products);

  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handlePreviewClick = () => navigate("/products-preview");

  const handleOpenAddForm = () => {
    setProductToEdit(null);
    setOpenForm(true);
  };

  const handleOpenEditForm = (product) => {
    setProductToEdit(product);
    setOpenForm(true);
  };

  const handleFormSubmit = (data) => {
    if (productToEdit) {
      dispatch(updateProduct({ ...productToEdit, ...data }));
    } else {
      dispatch(addProduct(data));
    }
    setOpenForm(false);
  };

  const handleOpenDialog = (id) => {
    setProductToDelete(id);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete !== null) {
      await dispatch(deleteProduct(productToDelete));
      dispatch(fetchProducts());
      setOpenDialog(false);
    }
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <ProductsButton startIcon={<AccountCircle />} onClick={handlePreviewClick}>
          Preview
        </ProductsButton>
        <ProductsButton startIcon={<Add />} onClick={handleOpenAddForm}>
          Add product
        </ProductsButton>
      </Box>

      <Typography
        variant='h3'
        sx={{ fontWeight: "bold", textAlign: "center", color: "white", marginBottom: 3 }}>
        Products
      </Typography>

      {status === "loading" ? (
        <CircularProgress color='success' sx={{ display: "block", margin: "auto" }} />
      ) : status === "failed" ? (
        <Typography sx={{ color: "red", textAlign: "center" }}>Error: {error}</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ width: "90%", margin: "auto", boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#3BB143" }}>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>ID</TableCell>
                {columns.map(({ key, label, isNumeric }) => (
                  <SortableTableHeader
                    key={key}
                    label={label}
                    sortKey={key}
                    isNumeric={isNumeric}
                    sortConfig={sortConfig}
                    onSort={handleSort}
                  />
                ))}
                <TableCell sx={{ fontWeight: "bold", color: "white" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedProducts.map((product) => (
                <TableRow
                  key={product.id}
                  onClick={() => setSelectedRow(product.id)}
                  sx={{
                    backgroundColor: selectedRow === product.id ? "#A7E3A1" : "#E8E8E8",
                    "&:hover": { backgroundColor: "#A7E3A1" },
                    cursor: "pointer",
                  }}>
                  <TableCell>{product.id}</TableCell>
                  {columns.map(({ key }) => (
                    <TableCell key={key} sx={{ fontWeight: "bold", color: "gray" }}>
                      {key === "price" ? product[key].toLocaleString() + "₴" : product[key]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <IconButton sx={{ color: "black" }} onClick={() => handleOpenEditForm(product)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      sx={{ color: "black" }}
                      onClick={() => handleOpenDialog(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <DeleteDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDeleteConfirm}
      />
      <ProductForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleFormSubmit}
        product={productToEdit}
      />
    </Container>
  );
};

export default ProductsTable;

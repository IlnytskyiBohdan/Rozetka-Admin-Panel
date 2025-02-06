import { Dialog, DialogActions, DialogContent, DialogTitle, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../Buttons/CustomButton/CustomButton";
import InputText from "../InputText/InputText";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputFile from "../InputFile/InputFile";
import validationRules from "../rules/validationRules";

const ProductForm = ({ open, onClose, onSubmit, product }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(
      product || {
        category: "",
        name: "",
        quantity: "",
        price: "",
        description: "",
      }
    );
  }, [open, product, reset]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <Box
        sx={{
          backgroundColor: "#E0E0E0",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <DialogTitle sx={{ color: "gray", fontWeight: "bold" }}>
          {product ? "Edit product" : "Add product"}
        </DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ backgroundColor: "#E0E0E0" }}>
        <InputText
          label='Category'
          name='category'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={validationRules.category}
        />
        <InputText
          label='Name'
          name='name'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={validationRules.name}
        />
        <InputText
          label='Quantity'
          name='quantity'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={validationRules.quantity}
        />
        <InputText
          label='Price'
          name='price'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={validationRules.price}
        />

        <InputFile label='Upload Image' sx={{ mb: 2 }} />

        <InputText
          label='Description'
          name='description'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          multiline
          minRows={4}
          validation={validationRules.description}
        />
      </DialogContent>

      <DialogActions
        sx={{ justifyContent: "center", backgroundColor: "#E0E0E0", paddingBottom: 3 }}>
        <CustomButton
          color='inherit'
          onClick={onClose}
          sx={{ backgroundColor: "#8D8D8D", color: "white", width: 160 }}>
          Cancel
        </CustomButton>
        <CustomButton
          type='submit'
          color='success'
          onClick={handleSubmit(onSubmit)}
          sx={{ width: 160 }}>
          Submit
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;

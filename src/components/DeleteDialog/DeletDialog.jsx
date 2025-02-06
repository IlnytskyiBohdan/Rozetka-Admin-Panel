import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import CustomButton from "../Buttons/CustomButton/CustomButton";

const DeleteDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth='xs' fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", color: "green" }}>
        Are u sure you want to delete this product?
      </DialogTitle>
      <DialogActions sx={{ justifyContent: "center", paddingBottom: 3 }}>
        <CustomButton
          color='inherit'
          onClick={onClose}
          sx={{ backgroundColor: "#E0E0E0", color: "black", width: "120px" }}>
          Cancel
        </CustomButton>
        <CustomButton variant='contained' color='error' onClick={onConfirm} sx={{ width: "120px" }}>
          Delete
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;

import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import GradientButton from "../GradientButton";

interface MenuDialogProps {
  isDialogOpen: boolean;
  text: string;
  label: string;
  handleDialogCancel: () => void;
  handleDialogConfirm: () => void;
}

const MenuDialog: React.FC<MenuDialogProps> = ({
  text,
  label,
  isDialogOpen,
  handleDialogCancel,
  handleDialogConfirm,
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={handleDialogCancel} maxWidth="xs">
      <DialogTitle>{"Proceed Without Menu Items?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {text}
          Your cart is empty. Do you really want to continue without adding any
          menu items?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ mr: 3 }}>
        <Button
          onClick={handleDialogCancel}
          sx={{
            color: "black",
            border: "2px solid black",
            mr: 1,
            borderRadius: 2,
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <GradientButton
          onClick={handleDialogConfirm}
          label={label}
          color="primary"
          autoFocus
        />
      </DialogActions>
    </Dialog>
  );
};

export default MenuDialog;

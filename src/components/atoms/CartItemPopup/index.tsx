// CartPopup.tsx (Atom Component)
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";

interface CartPopupProps {
  isCartPopupOpen: boolean;
  onClose: () => void;
  items: { name: string; price: number; quantity: number }[];
  onProceed: () => void;
  onEdit: () => void;
}

const CartPopup: React.FC<CartPopupProps> = ({
  isCartPopupOpen,
  onClose,
  items,
  onProceed,
  onEdit,
}) => {
  // Calculate total price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Dialog open={isCartPopupOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Review Your Cart</DialogTitle>
      <DialogContent>
        {items.length > 0 ? (
          <>
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>
                  {item.name} (x{item.quantity})
                </Typography>
                <Typography>Rs.{item.price * item.quantity}</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">Rs.{totalPrice}</Typography>
            </Box>
          </>
        ) : (
          <Typography>No items in the cart.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onEdit} color="secondary">
          Edit Items
        </Button>
        <Button onClick={onProceed} variant="contained" color="primary">
          Proceed to Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartPopup;

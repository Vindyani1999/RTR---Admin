import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import GradientButton from "../GradientButton";
import { categories } from "../../../constants/stringConstants"; // Adjust the path as needed
import CustomButton from "../CustomButton";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string[];
}

interface EditMenuDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (item: MenuItem) => void;
  item: MenuItem;
}

const EditMenuDialog: React.FC<EditMenuDialogProps> = ({
  open,
  onClose,
  onSave,
  item,
}) => {
  const [editedItem, setEditedItem] = useState<MenuItem>(item);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  };

  const handleCategoryChange = (category: string) => {
    setEditedItem((prevItem) => ({
      ...prevItem,
      category: prevItem.category.includes(category)
        ? prevItem.category.filter((cat) => cat !== category) // Uncheck
        : [...prevItem.category, category], // Check
    }));
  };

  const handleSave = () => {
    onSave(editedItem);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Edit Menu Item</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={editedItem.name}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              sx: {
                height: "36px",
                fontSize: "0.875rem",
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "0.875rem",
              },
            }}
          />
          <TextField
            label="Description"
            name="description"
            value={editedItem.description}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              sx: {
                height: "36px",
                fontSize: "0.875rem",
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "0.875rem",
              },
            }}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={editedItem.price}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              sx: {
                height: "36px",
                fontSize: "0.875rem",
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "0.875rem",
              },
            }}
          />

          <Box>
            <Typography sx={{ fontSize: "0.75rem" }}>
              {" "}
              Select Categories
            </Typography>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={editedItem.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    name="category"
                    color="primary"
                  />
                }
                label={category}
                sx={{
                  "& .MuiFormControlLabel-label": { fontSize: "0.80rem" }, // Adjusted font size for label
                }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 3 }}>
        <CustomButton label="Cancel" />
        <GradientButton
          onClick={handleSave}
          variant="contained"
          color="primary"
          label="Save Details"
        />
      </DialogActions>
    </Dialog>
  );
};

export default EditMenuDialog;

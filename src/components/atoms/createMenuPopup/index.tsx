import React, { useState, useEffect } from "react";
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

interface NewMenuDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (item: MenuItem) => void;
}

const NewMenuDialog: React.FC<NewMenuDialogProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [newItem, setNewItem] = useState<MenuItem>({
    name: "",
    description: "",
    price: undefined as any,
    image: "",
    category: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    // Reset errors when the dialog opens
    setErrors({
      name: "",
      description: "",
      price: "",
      category: "",
    });
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    });
  };

  const handleCategoryChange = (category: string) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      category: prevItem.category.includes(category)
        ? prevItem.category.filter((cat) => cat !== category)
        : [...prevItem.category, category],
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setNewItem((prevItem) => ({
          ...prevItem,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let formErrors = { ...errors };

    // Validate name
    if (!newItem.name.trim()) {
      formErrors.name = "Name is required.";
      formIsValid = false;
    }

    // Validate description
    if (!newItem.description.trim()) {
      formErrors.description = "Description is required.";
      formIsValid = false;
    }

    // Validate price
    if (!newItem.price || newItem.price <= 0) {
      formErrors.price = "Price must be greater than 0.";
      formIsValid = false;
    }

    // Validate category selection
    if (newItem.category.length === 0) {
      formErrors.category = "At least one category must be selected.";
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(newItem); // Pass the new item to the parent
      setNewItem({
        name: "",
        description: "",
        price: undefined as any,
        image: "",
        category: [],
      }); // Clear the form
      onClose(); // Close the dialog
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Create New Item</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 0.5,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Description"
            name="description"
            value={newItem.description}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.description}
            helperText={errors.description}
          />

          <TextField
            label="Price"
            name="price"
            type="number"
            value={newItem.price}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.price}
            helperText={errors.price}
          />
          <Box>
            <Typography sx={{ fontSize: "0.75rem" }}>
              Select Categories
            </Typography>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={newItem.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    name="category"
                    color="primary"
                  />
                }
                label={category}
                sx={{
                  "& .MuiFormControlLabel-label": { fontSize: "0.80rem" },
                }}
              />
            ))}
            {errors.category && (
              <Typography sx={{ color: "red", fontSize: "0.75rem" }}>
                {errors.category}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                width: "50%",
                height: 80,
                border: "2px dashed gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: newItem.image ? "transparent" : "#f5f5f5",
                cursor: "pointer",
              }}
              component="label"
            >
              <Typography sx={{ fontSize: "0.75rem", color: "gray" }}>
                {newItem.image ? "Change Image" : "Upload Image"}
              </Typography>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </Box>
            {newItem.image ? (
              <Box
                component="img"
                src={newItem.image}
                alt="Preview"
                sx={{
                  height: 80,
                  maxWidth: "calc(50% - 16px)",
                  objectFit: "contain",
                  border: "1px solid gray",
                }}
              />
            ) : (
              <Box
                sx={{
                  height: 80,
                  width: "calc(50% - 16px)",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "0.75rem", color: "gray" }}>
                  No Preview
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 3 }}>
        <CustomButton label="Cancel" onClick={onClose} />
        <GradientButton
          onClick={handleSave}
          variant="contained"
          color="primary"
          label="Save Item"
        />
      </DialogActions>
    </Dialog>
  );
};

export default NewMenuDialog;

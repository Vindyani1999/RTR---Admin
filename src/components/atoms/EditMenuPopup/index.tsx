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
  IconButton,
} from "@mui/material";
import GradientButton from "../GradientButton";
import { categories } from "../../../constants/stringConstants"; // Adjust the path as needed
import CustomButton from "../CustomButton";
import { ImageOutlined, DeleteOutline } from "@mui/icons-material"; // Use appropriate icons for image upload and delete

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
  const [imagePreview, setImagePreview] = useState<string>(item.image);

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
        ? prevItem.category.filter((cat) => cat !== category)
        : [...prevItem.category, category],
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setImagePreview(base64Image); // Update imagePreview state with base64 string
        setEditedItem((prevItem) => ({
          ...prevItem,
          image: base64Image, // Update image in editedItem
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64 for preview
    }
  };

  const handleImageDelete = () => {
    setImagePreview(""); // Reset preview
    setEditedItem({
      ...editedItem,
      image: "", // Clear the image field in editedItem
    });
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

          {/* Image upload and preview */}
          <Box>
            <Typography sx={{ fontSize: "0.75rem" }}>Upload Image</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload">
                <IconButton component="span">
                  <ImageOutlined />
                </IconButton>
              </label>
              {imagePreview && (
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "200px",
                    maxHeight: "200px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${imagePreview})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "rgba(0, 0, 0, 0.6)",
                    }}
                    color="error"
                    onClick={handleImageDelete}
                  >
                    <DeleteOutline />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Box>

          {/* Category selection */}
          <Box>
            <Typography sx={{ fontSize: "0.75rem" }}>
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
                  "& .MuiFormControlLabel-label": { fontSize: "0.80rem" },
                }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 3 }}>
        <CustomButton label="Cancel" onClick={onClose} />
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

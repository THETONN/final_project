import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, InputLabel } from "@mui/material";

export default function FormDialog({
  open,
  handleClose,
  data,
  handleFormSubmit,
}) {
  const {
    id,
    username: username,
    password: password,
    email: email,
    role: role,
  } = data;

  const [formData, setFormData] = useState({
    id: id || null,
    username: username || "",
    password: password || "",
    email: email || "",
    role: role || "",
  });

  useEffect(() => {
    setFormData({
      id: id || null,
      username: username || "",
      password: password || "",
      email: email || "",
      role: role || "",
    });
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prevData) => ({ ...prevData, [name]: value }));

    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      console.log("New from data", newData);
      return newData;
    });
  };

  const handleFormSubmitLocal = () => {
    console.log("formdata =", formData);
    // Make sure to pass the formData to the parent component's handleFormSubmit function
    handleFormSubmit(formData);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {console.log(id)}
        <DialogTitle id="alert-dialog-title">{id ? "Update users" : "Create new users"}</DialogTitle>
        <DialogContent>
          <form>
            {/* Text fields with value and onChange props */}
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="dense"
              fullWidth
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              autoComplete="current-password"
              onChange={handleChange}
              margin="dense"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="dense"
              fullWidth
            />
            {/* <TextField
              id="role"
              label="Role"
              variant="outlined"
              name="role"
              value={formData.role}
              onChange={handleChange}
              margin="dense"
              fullWidth
            /> */}
            {/* Select for Role */}
            {/* <InputLabel id="role-label">Role</InputLabel> */}
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
              margin="dense"
              variant="outlined"
            >
              {/* Replace these MenuItem values with the roles you have */}
              <MenuItem value="admin">ADMIN</MenuItem>
              <MenuItem value="user">USER</MenuItem>
              
            </Select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>

          <Button
            color="primary"
            onClick={handleFormSubmitLocal}
            variant="contained"
          >
            {id ? "Update" : "Submit"}
            
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

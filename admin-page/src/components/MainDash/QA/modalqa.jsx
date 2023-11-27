import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FormDialog({
  open,
  handleClose,
  data,
  handleFormSubmit,
  editing,
}) {
  const { id, question, options } = data;

  const [formData, setFormData] = useState({
    id: id || null,
    question: question || "",
    options: options || [{ id: 0, text: "" }],
  });

  useEffect(() => {
    setFormData({
      id: id || null,
      question: question || "",
      options: options || [{ id: 0, text: "" }],
    });
  }, [data]);



  const isInvalidValue = (value) => {
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนเป็นค่าที่ผิด
    // ในที่นี้สามารถกำหนดเงื่อนไขเองเพื่อตรวจสอบค่าที่ไม่ถูกต้อง
    return value === "ไม่ถูกต้อง";
  };

  const handleChange = (e, field, index) => {
    const { value } = e.target;
    const updatedData = { ...formData };

    if (field === "question") {
      updatedData[field] = value;
    } else if (field === "options") {
      updatedData[field][index].text = value;
      // console.log(value)
      
    }
    const jsonString = JSON.stringify(updatedData);
    setFormData(updatedData);
    console.log("Updated data", updatedData, "value:", value, "input:", field);
    console.log(jsonString);
  };

  const handleAddOption = () => {
    setFormData((prevData) => ({
      ...prevData,
      options: [...prevData.options, { id: prevData.options.length, text: "" }],
    }));
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...formData.options];
    newOptions.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      options: newOptions.map((option, i) => ({
        id: i,
        text: option.text,
      })),
    }));
  };

  const handleFormSubmitLocal = () => {
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
        <DialogTitle id="alert-dialog-title">
          {editing ? "Edit User" : "Create new user"}
        </DialogTitle>
        <DialogContent>
          <form className="row">
            <TextField
              id="question"
              label="Question"
              variant="outlined"
              name="question"
              value={formData.question}
              onChange={(e) => handleChange(e, "question")}
              margin="dense"
              className="d-grid col-12"
              multiline
              rows={3}
              fullWidth
            />
            {formData.options.map((option, index) => (
              <div className="d-grid col-12" key={option.id}>
                <TextField
                  label={`Option ${index + 1}`}
                  variant="outlined"
                  value={option.text}
                  onChange={(e) => handleChange(e, "options", index)}
                  margin="dense"
                  fullWidth
                  multiline
                  rows={2}
                />
                {index === formData.options.length - 1 && (
                  <Button
                    aria-label="Delete"
                    startIcon={<DeleteIcon />}
                    className="col-12 mt-3"
                    onClick={() => handleDeleteOption(index)}
                    color="error"
                    variant="contained"
                    style={{ display: editing ? "none" : "block" }}
                  ></Button>
                )}
              </div>
            ))}
            <div className="d-grid col-12">
              {!editing && (
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  size="small"
                  className="mt-2"
                  onClick={handleAddOption}
                >
                  ADD
                </Button>
              )}
            </div>
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
            {editing ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

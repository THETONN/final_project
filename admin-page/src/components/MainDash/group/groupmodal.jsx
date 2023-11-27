import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function FormDialog({ open, handleClose, data, handleFormSubmit }) {
  const { id, groupname: groupname, descript: descript, } = data;

  const [formData, setFormData] = useState({
    id: id || null,
    groupname: groupname || '',
    descript: descript || '',

  });

  useEffect(() => {
    setFormData({
      id: id || null,
      groupname: groupname || '',
      descript: descript || '',

    });
  }, [data]);
  

  const handleChange = (e) => {

    const { name, value } = e.target;
    // setFormData((prevData) => ({ ...prevData, [name]: value }));

    setFormData((prevData)=>{
    const newData = {...prevData, [name]:value};
    console.log('New from data', newData);
    return newData;
    });
    
  };

  const handleFormSubmitLocal = () => {
  
    console.log('formdata =',formData);
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
        <DialogTitle id="alert-dialog-title">{id ? 'Update group' : 'Create new group'}</DialogTitle>
        <DialogContent>
          <form>
            {/* Text fields with value and onChange props */}
            <TextField
              id="groupname"
              label="groupname"
              variant="outlined"
              name="groupname"
              value={formData.groupname}
              onChange={handleChange}
              margin="dense"
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              id="filled-multiline-static"
              multiline
              label="descript"
              type="password"
              name="descript"
              value={formData.descript}
              autoComplete="current-descript"
              onChange={handleChange}
              margin="dense"
              rows={6}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button color="primary" onClick={handleFormSubmitLocal} variant="contained">
            {id ? 'Update' : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "bootstrap/dist/css/bootstrap.css";
import FormDialog from "./groupmodal";
import "../MainDashUsers.css";
import { Button } from "primereact/button";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primeflex/package.json";
import { Toolbar } from "primereact/toolbar";

const initialValue = { groupname: "", descript:"", };

function Groupmain() {
  const [group, setGroup] = useState([]);
  const [error, setError] = useState(null);
  // Add and Edit modal
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialValue);
  
  
  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const dt = useRef(null);

  useEffect(() => {
    getGroup();
  }, []);

  const getGroup = () => {
    axios
      .get("http://localhost:8081/group")
      .then((res) => setGroup(res.data))
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          console.error("AxiosError Details:", err.response);
          setError(`AxiosError: ${err.message}`);
        } else {
          console.error("Error Details:", err);
          setError(`Error: ${err.message}`);
        }
      });
  };

  // Delete
  const handleDeleteUser = async (id_group) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Make a request to delete the group
          const response = await axios.delete(
            "http://localhost:8081/group/" + id_group
          );
          // window.location.reload()
          console.log("Server response:", response);
          // Update the state to reflect the deletion
          setGroup((prevGroup) => prevGroup.filter((group) => group.id_group !== id_group));

          MySwal.fire("Deleted!", "Your group has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting group:", error.message);
          MySwal.fire("Error!", "Failed to delete group.", "error");
        }
      }
    });
  };

  // Add and Edit =====================================================================================
  const MySwal = withReactContent(Swal);
  const Toast = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
    // alert(getUsers())
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  const onChange = (e) => {
    const { value, id } = e.target;
    console.log(value,id)
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = (formData) => {
    
    // alert('update')
    // console.log("FormData before API call:", formData);

    if (formData.id) {
      // alert("FormData2 before API call:", formData);
      //updating a user
      // const confirm = window.confirm("Are you sure, you want to update this row ?")
      // confirm &&
      
      // Clicl button Update
      
      // console.log("FormData before API call update:", formData);
      axios
        .put(`http://localhost:8081/update_group/${formData.id}`, { ...formData })
        .then((res) => {
          handleClose();
          getGroup();
          Toast.fire({
            icon: "success",
            title: "Update user success",
          });
        })
        .catch((err) => {
          console.error("Error updating user:", err);
          // Handle error
        });
    } else {
      // Clicl Add+
      // alert("FormData3 before API call:", formData);
      // alert(formData);
      axios
      .post(`http://localhost:8081/group`, { ...formData })
      .then((res) => {

        // console.log("FormData4 before API call:",formData);
        handleClose();
        getGroup();
        Toast.fire({
          icon: "success",
          title: "Add new user success",
        });
      })
      .catch((err) => {
        console.error("Error adding user:", err);
        // Handle error
      });
    }
  };
  const handleUpdate = (oldData) => {
    setFormData({
      id: oldData.id_group,
      groupname: oldData.group_name,
      descript: oldData.group_description,

      // Include other properties as needed
    });
    handleClickOpen();
  };

  const actionBodyTemplate = (group) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          raised
          className="mr-2 rounded-5"
          onClick={() => handleUpdate(group)}
        />
        {/* <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          raised
          className="rounded-5 "
          onClick={(e) => handleDeleteUser(group.id_group)}
        /> */}
      </React.Fragment>
    );
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Add"
          icon="pi pi-plus"
          className="rounded p-2"
          size="small"
          severity="success"
          onClick={handleClickOpen}
        />
      </div>
    );
  };
  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help rounded p-2"
        size="small"
        onClick={exportCSV}
      />
    );
  };
  

  // =====================================================================================================
  return (
    <div className="Main">
      <div className="d-flex   justify-content-center align-items-center">
        <div className=" bg-white rounded p-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="mt-2 text-dark">Group Table </h1>
          <br />

          <Toolbar
            className="mb-4 mt-3 p-2"
            // left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={group}
            scrollable
            scrollHeight="360px"
            paginator
            rows={4}
            rowsPerPageOptions={[4, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              // field={randomField.toString()}
              body={(data, options) => options.rowIndex + 1}
              header="#"
              style={{ width: "5%" }}
            ></Column>
            <Column
              field="group_name"
              header="GroupName"
              style={{ width: "25%" }}
              sortable
            ></Column>
            <Column
              field="group_description"
              header="Description"
              style={{ width: "50%" }}
            ></Column>

            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>

          {/* modal action */}
          <FormDialog
            open={open}
            handleClose={handleClose}
            data={formData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Groupmain;

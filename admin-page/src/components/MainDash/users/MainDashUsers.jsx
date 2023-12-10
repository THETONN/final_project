import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "bootstrap/dist/css/bootstrap.css";
import FormDialog from "../usermodal";
import "../MainDashUsers.css";
import { Button } from "primereact/button";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primeflex/package.json";
import { Toolbar } from "primereact/toolbar";

const initialValue = { username: "", password:"", email:"", role:"" };

function MainDashUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  // Add and Edit modal
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialValue);
  
  
  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const dt = useRef(null);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:8081/users")
      .then((res) => setUsers(res.data))
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
  const handleDeleteUser = async (id) => {
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
          // Make a request to delete the user
          const response = await axios.delete(
            "http://localhost:8081/users/" + id
          );
          // window.location.reload()
          console.log("Server response:", response);
          // Update the state to reflect the deletion
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

          MySwal.fire("Deleted!", "Your user has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting user:", error.message);
          MySwal.fire("Error!", "Failed to delete user.", "error");
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
    const { value, id_users } = e.target;
    console.log(value,id)
    setFormData({ ...formData, [id_users]: value });
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
      
      // alert("FormData before API call:", formData);
      console.log(formData.id);
      console.log(formData);
      axios
        .put(`http://localhost:8081/update/${formData.id}`, { ...formData })
        .then((res) => {
          handleClose();
          getUsers();
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
      axios
      .post(`http://localhost:8081/users`, { ...formData })
      .then((res) => {

        console.log("FormData4 before API call:",formData);
        handleClose();
        getUsers();
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
      id: oldData.id,
      username: oldData.name,
      password: oldData.password,
      email: oldData.email,
      role: oldData.role
      // Include other properties as needed
    });
    handleClickOpen();
  };

  const actionBodyTemplate = (users) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          raised
          className="mr-2 rounded-5"
          onClick={() => handleUpdate(users)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          raised
          className="rounded-5 "
          onClick={(e) => handleDeleteUser(users.id)}
        />
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
  const randomid= () =>{
    const [generatedId, setGeneratedId] = useState(generateRandomId());
    const generateRandomId = () => {
      return Math.floor(Math.random() * 100) + 10;
    }
  }

  
  const randomField = Math.floor(Math.random() * 100) + 10;

  // =====================================================================================================
  return (
    <div className="Main">
      <div className="d-flex  justify-content-center align-items-center">
        <div className=" bg-white rounded p-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="mt-2 text-dark">Users Table </h1>
          <br />

          {/* 
        <button className="btn btn-success mt-3 mb-3" onClick={handleClickOpen}>
          ADD +
        </button> */}

          <Toolbar
            className="mb-4 mt-3 p-2"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={users}
            scrollable
            scrollHeight="360px"
            paginator
            rows={4}
            rowsPerPageOptions={[4, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              body={(data, options) => options.rowIndex + 1}
              header="#"
              style={{ width: "5%" }}
            ></Column>
            <Column
              field="name"
              header="Username"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="email"
              header="Email"
              style={{ width: "50%" }}
            ></Column>
            
            <Column field="role" header="Role" style={{ width: "25%" }}>
            </Column>
            <Column
              field="groupId"
              header="Group"
              style={{ width: "25%" }}
            ></Column>
             <Column
              field="feedback"
              header="Feedback"
              style={{ width: "25%" }}
            ></Column>
            {/* <Column
              field="createdAt"
              header="createdAt"
              style={{ width: "25%" }}
            ></Column> */}
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

export default MainDashUsers;

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "bootstrap/dist/css/bootstrap.css";
import "./MainDashUsers.css";

import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";

const initialValue = { name: "", password: "" };


function Mainres() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

//   Export to CSV
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

  

  const actionBodyTemplate = (users) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          raised
          className="mr-2 rounded-5"
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          raised
          className="rounded-5 "
        />
      </React.Fragment>
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
      <div className="d-flex  bg-primary justify-content-center align-items-center">
        <div className=" bg-white rounded p-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="mt-2">Responses Table</h1>
          <br />

          {/* 
        <button className="btn btn-success mt-3 mb-3" onClick={handleClickOpen}>
          ADD +
        </button> */}

          <Toolbar
            className="mb-4 mt-3 p-2"
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
              field="id"
              header="#"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="name"
              header="Name"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="name"
              header="Name"
              style={{ width: "25%" }}
            ></Column>
            <Column field="name" header="Name" style={{ width: "25%" }}>
              {" "}
            
            </Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>

          {/* modal action */}
        </div>
      </div>
    </div>
  );
}

export default Mainres;

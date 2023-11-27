import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "bootstrap/dist/css/bootstrap.css";
import FormDialog from "./usermodal";
import "./MainDashUsers.css";
import { Button } from "primereact/button";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primeflex/package.json";
import { Toolbar } from "primereact/toolbar";
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

function Groupmain() {
  const [group, setGroup] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);
  const [statuses] = useState(["ACTIVE", "NOT ACTIVE"]);
  // Add and Edit modal
  const getSeverity = (value) => {
    switch (value) {
      case "ACTIVE":
        return "success";

      case "NOT ACTIVE":
        return "warning";

      default:
        return null;
    }
  };

  // add new data
  const onRowEditComplete = (e) => {
    let _group = [...group];
    let { newData, index } = e;

    _group[index] = newData;

    setGroup(_group);
  };
  const textEditor = (options) => {
    return (
      <InputTextarea autoResize 
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const statusEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData.inventoryStatus)}
      ></Tag>
    );
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  // Get Data from database
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

  const actionBodyTemplate = (group) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          raised
          className="rounded-5 "
          onClick={(e) => handleDeleteUser(users.id_users)}
        />
      </React.Fragment>
    );
  };

  // Delete
  const handleDeleteUser = async (id_users) => {
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
            "http://localhost:8081/group/" + id_group
          );
          // window.location.reload()
          console.log("Server response:", response);
          // Update the state to reflect the deletion
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id_users !== id_users)
          );

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

  const onChange = (e) => {
    const { value, id_users } = e.target;
    console.log(value, id);
    setFormData({ ...formData, [id_users]: value });
  };

  const handleFormSubmit = (formData) => {
    if (formData.id) {
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
        });
    } else {
      // Clicl Add+
      axios
        .post(`http://localhost:8081/users`, { ...formData })
        .then((res) => {
          console.log("FormData4 before API call:", formData);
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
        <div className=" bg-white rounded p-4">
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="mt-2">Users Table </h1>
          <br />

          <Toolbar
            className="mb-4 mt-3 p-2"
            right={rightToolbarTemplate}
          ></Toolbar>
        
          <DataTable
            value={group}
            editMode="row"
            
            onRowEditComplete={onRowEditComplete}
            tableStyle={{ minWidth: "50rem" }}
            scrollable
            scrollHeight="360px"
            rows={4}
            rowsPerPageOptions={[4, 10, 25, 50]}
          >
            <Column
              field="id_group"
              header="#"
              editor={(options) => textEditor(options)}
              style={{ width: "20%" }}
              sortable

            ></Column>
            <Column
              field="group_name"
              header="GroupName"
              editor={(options) => textEditor(options)}
              style={{ width: "20%" }}
            ></Column>
            <Column
              field="group_description"
              header="Description"
              editor={(options) => textEditor(options)}
              style={{ width: "20%" }}
            ></Column>
            <Column
              field="inventoryStatus"
              header="Status"
              body={statusBodyTemplate}
              editor={(options) => statusEditor(options)}
              style={{ width: "20%" }}
            ></Column>

            <Column
              rowEditor
              headerStyle={{ width: "10%", minWidth: "8rem" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Groupmain;

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../MainDashUsers.css";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeflex/package.json";
import { Toolbar } from "primereact/toolbar";

const initialValue = { question: "", option: "" };

function QuestionandAnswer() {
  const [qa, setQa] = useState([]);
  const [error, setError] = useState(null);

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const dt = useRef(null);

  useEffect(() => {
    getQa();
  }, []);

  const getQa = () => {
    axios
      .get("http://localhost:8081/qa")
      .then((res) => setQa(res.data))
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

  // const leftToolbarTemplate = () => {
  //   return (
  //     <div className="flex flex-wrap gap-2">
  //       <Button
  //         label="Add"
  //         icon="pi pi-plus"
  //         className="rounded p-2"
  //         size="small"
  //         severity="success"
  //         onClick={handleClickOpen}
  //       />
  //     </div>
  //   );
  // };

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

  return (
    <div className="Main">
      <div className="d-flex   justify-content-center align-items-center">
        <div className=" bg-white rounded p-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="mt-2 text-dark">Q & A Table</h1>
          <br />

          <Toolbar
            className="mb-4 mt-3 p-2"
            // left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={qa}
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
              field="id_users"
              header="user"
              style={{ width: "5%" }}
            ></Column>
            <Column field="age" header="age" style={{ width: "10%" }}></Column>
            <Column
              field="education"
              header="education"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="income"
              header="income"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="household"
              header="household"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_freq"
              header="after_freq"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_person"
              header="after_person"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_expenditure"
              header="after_expenditure"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_day_travel"
              header="after_day_travel"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="gender"
              header="gender"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="occupation"
              header="occupation"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="per_vehicle"
              header="per_vehicle"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="status"
              header="status"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="per_region"
              header="per_region"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_season"
              header="after_season"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_type"
              header="after_type"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_region"
              header="after_region"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_vehicle"
              header="after_vehicle"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_period_time"
              header="after_period_time"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="after_want_travel"
              header="after_want_travel"
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="groups"
              header="groups"
              style={{ width: "10%" }}
            ></Column>
            {/* <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column> */}
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default QuestionandAnswer;

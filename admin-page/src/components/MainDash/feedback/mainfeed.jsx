import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../MainDashUsers.css";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeflex/package.json";
import { Toolbar } from "primereact/toolbar";

const initialValue = { question: "", option: "", };

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
      .get("http://localhost:8081/feed")
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
      <div className="d-flex  justify-content-center align-items-center">
        <div className=" bg-white rounded p-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="mt-2 text-dark">FeedBack Table</h1>
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
              style={{ width: "5%", }}
              
            ></Column>
            <Column
              field="id_users"
              header="user"
              style={{ width: "5%"}}
            ></Column>
            <Column
              field="Q1"
              header="According to the prediction results from machine learning, how closely do the characteristics match yours?"
              style={{ width: "20%", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
    headerStyle={{ minWidth: '120px', maxWidth: '200px' }}
              
            ></Column>
            <Column
              field="Q2"
              header="How well did our recommended tour package align with your personal interests and preferences?"
              style={{ width: "20%", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
    headerStyle={{ minWidth: '120px', maxWidth: '200px' }}
            ></Column>
            <Column
              field="Q3"
              header="How helpful were the tour recommendations in assisting you to find a suitable tour package?"
              style={{ width: "20%", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
    headerStyle={{ minWidth: '120px', maxWidth: '200px' }}
            ></Column>
            <Column
              field="Q4"
              header="How worthwhile and interesting are the tour packages we recommend?"
              style={{ width: "20%", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
    headerStyle={{ minWidth: '120px', maxWidth: '200px' }}
            ></Column>
            <Column
              field="Q5"
              header="How appropriate are the questions in our questionnaire?"
              style={{ width: "20%", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
              headerStyle={{ minWidth: '120px', maxWidth: '200px' }}
            ></Column>
            <Column
              field="groupId"
              header="groupId"
              style={{ width: "5%" }}
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

import React from "react";
import { Rating } from "primereact/rating";

function Cardnew() {
  return (
    <div>
      <div className="grid mt-2">
        <div className="col-12 md:col-6 lg:col-3 ">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Group 1</span>
                <div className="text-900 font-medium text-xl">152 people</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-users text-blue-500 text-xl"></i>
              </div>
            </div>
            {/* <span className="text-green-500 font-medium">24 new </span> */}
            {/* <Rating value={5} readOnly cancel={false} /> */}
          </div>
        </div>
        {/* ============================================================================================= */}
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Group 2</span>
                <div className="text-900 font-medium text-xl">110 people</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-users text-orange-500 text-xl"></i>
              </div>
            </div>
            {/* <span className="text-green-500 font-medium">%52+ </span> */}
            {/* <span className="text-500">since last week</span> */}
            {/* <Rating value={4} readOnly cancel={false} /> */}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                Group 3
                </span>
                <div className="text-900 font-medium text-xl">200 people</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-users text-cyan-500 text-xl"></i>
              </div>
            </div>
            {/* <span className="text-green-500 font-medium">520 </span> */}
            {/* <span className="text-500">newly registered</span> */}
            {/* <Rating value={3} readOnly cancel={false} /> */}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                Group 4
                </span>
                <div className="text-900 font-medium text-xl">60 people</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-purple-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-users text-purple-500 text-xl"></i>
              </div>
            </div>
            {/* <span className="text-green-500 font-medium">85 </span> */}
            {/* <span className="text-500">responded</span> */}
            {/* <Rating value={2} readOnly cancel={false} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cardnew;

import React from "react";

function Home() {
  return (
    <>
      {/* Menambahkan title */}
      <div className="container-full p-3">
        <h2 className="text-center">Employee Datas</h2>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary">
            <i className="bi bi-person-add"></i> Add Employee
          </button>
          <input
            type="text"
            placeholder="Search employee ..."
            className="p-2"
          />
        </div>
      </div>
      {/* Menambahkan add button dan search bar */}
      {/* Menampilkan table */}
    </>
  );
}

export default Home;

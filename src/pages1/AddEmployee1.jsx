import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEmployee1 = () => {
  //deklarasi useState hook
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    designation: "",
    city: "",
  });

  // deklarasi useNavigate hook
  const navigate = useNavigate();

  // handle change
  // const handleChange = (e) => {

  // };

  // post data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      //.post(`http://localhost:8080/employees`, employee) // postnya kan satu - satu
      .post(
        `http://192.168.194.36:5000/api/employeeApp/create/employee`,
        employee
      )
      .then((res) => {
        console.log(res);
        //toast.success("Data employee successed to be added!");
        alert("Data employee successed to be added!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-4 mx-auto">
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div className="card p-2">
              <div className="card-header border-0 bg-transparent">
                <h2 className="text-center">Add Employee</h2>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3 p-2 "
                  onChange={(e) => {
                    setEmployee({ ...employee, name: e.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setEmployee({ ...employee, email: e.target.value });
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setEmployee({ ...employee, phone: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Designation"
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setEmployee({ ...employee, designation: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="city"
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setEmployee({ ...employee, city: e.target.value });
                  }}
                />
                <select
                  className="form-select text-secondary p-2"
                  aria-label="Example select with button addon"
                  onChange={(e) => {
                    setEmployee({ ...employee, gender: e.target.value });
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="card-footer border-0">
                <button className="btn btn-success w-100">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee1;

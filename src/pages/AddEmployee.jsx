import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    jobPosition: "",
    gender: "",
    address: "",
  });

  //post method for adding employee data
  const postEmployeeData = () => {
    axios
      .post("http://localhost:8080/employees", employee)
      .then((res) => {
        setEmployee(res.data);
        console.log(res);
        console.log("Data is successful added");
        navigate("/");
      })
      .catch((err) => {
        console.err(err);
      });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    postEmployeeData();
  };
  return (
    <>
      {/* making container */}
      <div className="container-full p-3 d-flex justify-content-center align-items-center">
        {/* making form add employee data*/}
        <form onSubmit={handleSubmit}>
          <div className="card">
            {/* Making form header */}
            <div className="card-header">
              <h3 className="text-center">Add Employee</h3>
            </div>
            {/* Making form body */}
            <div className="card-body d-flex flex-content-between gap-3">
              <div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name ..."
                    id="name"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, name: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="psw">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password ..."
                    id="psw"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, password: e.target.value });
                    }}
                  />
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email ..."
                      id="email"
                      className="form-control"
                      onChange={(e) => {
                        setEmployee({ ...employee, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number ..."
                      id="phone"
                      className="form-control"
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          phoneNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="jobPosition">Job Position</label>
                  <input
                    type="text"
                    placeholder="Enter job position ..."
                    id="jobPosition"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, jobPosition: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-select"
                    onChange={(e) => {
                      setEmployee({ ...employee, gender: e.target.value });
                    }}
                  >
                    <option disabled>Select gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    type="text"
                    placeholder="Enter address ..."
                    id="address"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, address: e.target.value });
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Making form footer */}
            <div className="card-footer text-center">
              <button className="btn btn-success">Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddEmployee;

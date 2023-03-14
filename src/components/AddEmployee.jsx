import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  // deklarasi hook
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    designation: "",
    city: "",
  });

  // useNavigate
  const nav = useNavigate();

  // method post request untuk menambah data
  const postRequest = () => {
    axios
      .post(`http://localhost:8080/employees`, employee)
      .then((res) => {
        console.log(res);
        alert("The data has been successfully saved!");
        nav("/");
      })
      .catch((err) => {
        console.log(err);
        alert("The data failed to save!");
      });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest();
  };

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-5 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Add Employee</h2>
              </div>
              <div className="card-body">
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    id="name"
                    className="form-control"
                    onChange={(e) =>
                      setEmployee({ ...employee, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    id="email"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, email: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    placeholder="Enter phone"
                    id="phone"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, phone: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    className="form-select"
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  >
                    <option selected disabled value>--Select Gender--</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="designation">Designation:</label>
                  <input
                    type="text"
                    placeholder="Enter designation"
                    id="designation"
                    className="form-control"
                    onChange={(e) => {
                      setEmployee({ ...employee, designation: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <select
                    id="city"
                    className="form-select"
                    onChange={(e) =>
                      setEmployee({ ...employee, city: e.target.value })
                    }
                  >
                    <option selected disable value>--Select City--</option>
                    <option>Yoyakarta</option>
                    <option>Jakarta</option>
                    <option>Serang</option>
                    <option>Bandung</option>
                    <option>Semarang</option>
                    <option>Surabaya</option>
                  </select>
                </div>
              </div>
              <div className="card-footer">
                <input
                  type="submit"
                  value="Save"
                  className="btn btn-success"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

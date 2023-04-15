import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  // deklarasi useState() hook
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    designation: "",
    city: "",
  });

  useEffect(() => {
    document.title = "Add Employee";
  }, []);

  // useNavigate
  const nav = useNavigate();

  // method post request untuk menambah data
  const postRequest = () => {
    axios
      .post(
        `http://192.168.194.36:5000/api/employeeApp/create/employee`,
        employee
      )
      //.post(`http://192.168.1.60:5000/employee`, employee)
      .then((res) => {
        // menghandle ketika sukses menambah data employee
        console.log(res.data);
        alert("The data has been successfully saved!");
        nav("/"); // ketika data telah berhasil ditambahkan, langsung dinavigasikan ke halaman home
      })
      .catch((err) => {
        console.log(err);
        alert("The data failed to save!");
        //alert(err.message);
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
                <h3 className="text-center">Add Employee</h3>
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
                    required
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
                    required
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
                    required
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
                    required
                  >
                    {/* <option>--Select Gender--</option> */}
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
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
                    required
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
                    required
                  >
                    {/* <option>--Select City--</option> */}
                    <option value="Yogyakarta">Yoyakarta</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Serang">Serang</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Semarang">Semarang</option>
                    <option value="Surabaya">Surabaya</option>
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

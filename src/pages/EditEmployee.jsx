import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  //useParam react hook untuk mengakses parameter id route yang sesuai
  const { id } = useParams();

  // deklarasi hook
  const [update, setUpdate] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    designation: "",
    city: "",
  });

  // useNavigate
  const nav = useNavigate();

  // method get request untuk mengambil data dari json server
  const getRequest = () => {
    axios
      .get(`http://localhost:8080/employees/${id}`)
      //.get(`http://192.168.1.60:5000/employees/${id}`)
      .then((res) => {
        setUpdate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect
  useEffect(() => {
    getRequest();
    document.title = "Edit Employee";
  }, [id]);

  //method patch untuk mengupdate data
  const patchRequest = () => {
    axios
      //.patch(`http://localhost:8080/employees/${id}`, update)
      .put(`http://192.168.1.60:5000/employee/${id}`, update)
      .then(() => {
        alert("The data is updated!");
        nav("/");
      })
      .catch((err) => {
        console.log(err);
        alert("The data is failed to be updated!");
      });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    patchRequest();
  };

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-5 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Edit Employee</h2>
              </div>
              <div className="card-body">
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    value={update.name || ""}
                    id="name"
                    className="form-control"
                    onChange={(e) =>
                      setUpdate({ ...update, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    value={update.email || ""}
                    id="email"
                    className="form-control"
                    onChange={(e) => {
                      setUpdate({ ...update, email: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    value={update.phone}
                    id="phone"
                    className="form-control"
                    onChange={(e) => {
                      setUpdate({ ...update, phone: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    className="form-select"
                    onChange={(e) =>
                      setUpdate({ ...update, gender: e.target.value })
                    }
                    value={update.gender}
                  >
                    <option selected disabled value>
                      --Select Gender--
                    </option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="designation">Designation:</label>
                  <input
                    type="text"
                    value={update.designation || ""}
                    id="designation"
                    className="form-control"
                    onChange={(e) => {
                      setUpdate({ ...update, designation: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <select
                    id="city"
                    className="form-select"
                    onChange={(e) =>
                      setUpdate({ ...update, city: e.target.value })
                    }
                    value={update.city || ""}
                  >
                    <option selected disable value>
                      --Select City--
                    </option>
                    <option>Yoyakarta</option>
                    <option>Jakarta</option>
                    <option>Serang</option>
                    <option>Bandung</option>
                    <option>Semarang</option>
                    <option>Surabaya</option>
                  </select>
                </div>
              </div>
              <div className="card-footer text-end">
                <Link to="/" className="btn btn-danger mx-2">
                  Back
                </Link>
                <button className="btn btn-success">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;

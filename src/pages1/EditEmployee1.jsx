import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditEmployee1() {
  // deklarasi useState hook
  const [update, setUpdate] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    designation: "",
    city: "",
  });

  // deklarasi useNavigate dan useParam hook
  const navigate = useNavigate();
  const { id } = useParams(); // mengakses parameter id route yang sesuai

  useEffect(() => {
    document.title = "Edit Employee 1"; // beri judul tab

    // nge-get data dari server berdasarkan id
    axios
      //.get(`http://localhost:8080/employees/${id}`)
      .get(`http://192.168.194.36:5000/api/employeeApp/read/employee/${id}`)
      .then((res) => {
        console.log(res);
        setUpdate(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  // update data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .put(`http://localhost:8080/employees/${id}`, update)
      .put(
        `http://192.168.194.36:5000/api/employeeApp/update/employee/${id}`,
        update
      )
      .then((res) => {
        console.log(res);
        toast.success("employee data is successed to be update!");
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
                <h2 className="text-center">Edit Employee</h2>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Name"
                  value={update.name || ""}
                  className="form-control mb-3 p-2 "
                  onChange={(e) => {
                    setUpdate({ ...update, name: e.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={update.email || ""}
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setUpdate({ ...update, email: e.target.value });
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={update.phone || ""}
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setUpdate({ ...update, phone: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Designation"
                  value={update.designation || ""}
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setUpdate({ ...update, designation: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="city"
                  value={update.city || ""}
                  className="form-control mb-3 p-2"
                  onChange={(e) => {
                    setUpdate({ ...update, city: e.target.value });
                  }}
                />
                <select
                  className="form-select text-secondary p-2"
                  aria-label="Example select with button addon"
                  value={update.gender || ""}
                  onChange={(e) => {
                    setUpdate({ ...update, gender: e.target.value });
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="card-footer border-0">
                <button className="btn btn-success w-100">Edit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee1;

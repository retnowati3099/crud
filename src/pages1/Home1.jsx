import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Home1 = () => {
  // deklarasi useState hook
  const [employees, setEemployees] = useState([]);

  // deklarasi useNavigate hook
  const navigate = useNavigate();

  // deklarasi useEffect hook
  useEffect(() => {
    axios
      //.get(` http://localhost:8080/employees`)
      .get(` http://192.168.194.36:5000/api/employeeApp/read/employees`)
      .then((res) => {
        console.log(res);
        setEemployees(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // handle delete
  const handleDelete = (id) => {
    const confirm = window.confirm(`Do you want to delete the data?`);
    if (confirm) {
      axios
        //.delete(` http://localhost:8080/employees/${id}`)
        .delete(
          `http://192.168.194.36:5000/api/employeeApp/delete/employee/${id}`
        )
        .then((res) => {
          alert(`The data is succesed to be delete!`);
          setEemployees(employees.filter((person) => person.idEmployee !== id));
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto">
          <div>
            <h2 className="text-center">Data Employee</h2>
          </div>
          <div className="d-flex justify-content-between my-3">
            <Link to="/add-employee1" className="btn btn-outline-primary">
              <i className="bi bi-person-plus-fill"></i> Add Employee
            </Link>
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search employee name ..."
            />
          </div>
          <table className="table table-bordered">
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Designation</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {employees.map((person, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.gender}</td>
                  <td>{person.designation}</td>
                  <td>{person.city}</td>
                  <td className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-outline-danger mx-1"
                      onClick={() => handleDelete(person.idEmployee)}
                    >
                      <i class="bi bi-trash3-fill"></i> Delete
                    </button>
                    <Link
                      to={`edit-employee1/${person.idEmployee}`}
                      className="btn btn-outline-success mx-1"
                    >
                      <i class="bi bi-pencil-fill"></i> Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home1;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  // deklarasi useState() hook
  const [employee, setEmployee] = useState([]);
  const [query, setQuery] = useState([]);

  // axios dengan method get request untuk mengambil data dari server
  const getRequest = () => {
    axios
      .get(`http://localhost:8080/employees`)
      //.get(`http://192.168.1.60:5000/employees`)
      .then((res) => {
        setEmployee(res.data);
        //console.log(employee);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nav = useNavigate();

  // useEffect
  useEffect(() => {
    getRequest();
  }, []);

  const deleteRequest = (id) => {
    // konfirmasi untuk melakukan delete data
    const confirm = window.confirm(`Do you really want to delete?`);
    if (confirm) {
      axios
        .delete(`http://localhost:8080/employees/${id}`)
        // .delete(`http://192.168.1.60:5000/employee/${id}`)
        .then((res) => {
          alert("The data successed to delete!");
          setEmployee(employee.filter((person) => person.id !== id)); // mengupdate state employee dengan method filter
          nav("/");
        })
        .catch((err) => {
          console.log(err);
          alert("The data failed to delete!");
        });
    }
  };

  return (
    <div className="container-full m-2 mx-auto">
      <h2 className="text-center">Employees Data</h2>
      <div className="my-3 d-flex justify-content-between">
        <div>
          <Link to="/add-employee" className="btn btn-primary">
            <i className="bi-person-plus"></i> Add Employee
          </Link>
        </div>
        <div className="input-group" style={{ width: "200px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search employee ..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <table className="table table-bordered">
        <thead className="text-center table-dark">
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
        <tbody>
          {employee
            .filter((person) => person.name.toLowerCase().includes(query))
            .map((person, index) => (
              <tr key={index} className="text-center">
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.gender}</td>
                <td>{person.designation}</td>
                <td>{person.city}</td>
                <td>
                  <Link
                    to={`/edit-employee/${person.id}`}
                    className="btn btn-outline-success mx-2"
                  >
                    <i className="bi-pencil-square"></i> Edit
                  </Link>

                  <Link
                    className="btn btn-outline-danger mx-2"
                    onClick={(e) => deleteRequest(person.id)}
                  >
                    <i className="bi-trash"></i> Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

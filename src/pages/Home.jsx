import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Home() {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  // get method for getting all of employee datas
  const getEmployeeData = () => {
    axios
      .get(" http://localhost:8080/employees")
      .then((res) => {
        setEmployee(res.data);
        console.log("Success getting data");
        console.log(employee);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  // delete method for deleting employee data based on its id
  const handleDelete = (id) => {
    // conformation for delete data
    const confirm = window.confirm("Do you want to delete the data?");
    if (confirm) {
      axios
        .delete(`http://localhost:8080/employees/${id}`)
        .then((res) => {
          alert("The data successfull to delete!");
          setEmployee(employee.filter((person) => person.id !== id));
          navigate("/");
        })
        .catch((err) => console.err(err));
    }
  };

  return (
    <>
      <div className="container-full d-flex flex-column gap-3 p-3">
        {/* Menambahkan title */}
        <h2 className="text-center">Employee Datas</h2>
        {/* Menambahkan add button dan search bar */}
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/add-employee`} className="btn btn-primary p-2">
            <i className="bi bi-person-add"></i> Add Employee
          </Link>
          <div className="w-25">
            <input
              type="text"
              placeholder="Search employee ..."
              className="p-2 form-control"
            />
          </div>
        </div>
        {/* Menampilkan table */}
        <table className="table">
          <thead className="bg-black text-white text-center fw-bold">
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone Number</td>
              <td>Job Position</td>
              <td>Gender</td>
              <td>Address</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className="text-center">
            {employee.map((person, index) => (
              <tr key={index}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phoneNumber}</td>
                <td>{person.jobPosition}</td>
                <td>{person.gender}</td>
                <td>{person.address}</td>
                <td>
                  <div className="d-flex justify-content-evenly">
                    <Link
                      to={`/edit-employee/${person.id}`}
                      className="btn btn-outline-success"
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </Link>
                    <Link className="btn btn-outline-danger">
                      <i
                        className="bi bi-trash"
                        onClick={() => handleDelete(person.id)}
                      ></i>
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;

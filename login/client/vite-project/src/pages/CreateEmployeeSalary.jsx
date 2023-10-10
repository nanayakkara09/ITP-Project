import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';

const CreateEmployeeSalary = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState([]);
  const [employeeLeave, setEmployeeLeave] = useState([]);
  const [selectedEmployeeEmail, setSelectedEmployeeEmail] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    idNumber: '',
    phoneNumber: '',
    team: '',
    daySalary: '',
    wDays: '',
    lDays: '',
    calculatedSalary: 0, // Initialize calculatedSalary as 0
  });

  const [selectedEmployeeData, setSelectedEmployeeData] = useState({
    name: '',
    email: '',
    idNumber: '',
    phoneNumber: '',
    team: '',
  });

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployee');
        setEmployee(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployee();
  }, []);

  useEffect(() => {
    const getEmployeeLeave = async () => {
      try {
        const { data } = await axios.get('/employee/getEmployeeLeave');
        setEmployeeLeave(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch employee data');
      }
    };

    getEmployeeLeave();
  }, []);

  const createEmployeeSalary = async (e) => {
    e.preventDefault();
    const { name, email, idNumber, phoneNumber, team, daySalary, wDays, lDays, calculatedSalary } = data;
    try {
      const response = await axios.post('/employee/createEmployeeSalary', {
        name,
        email,
        idNumber,
        phoneNumber,
        team,
        daySalary,
        wDays,
        lDays,
        calculatedSalary,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          name: '',
          email: '',
          idNumber: '',
          phoneNumber: '',
          team: '',
          daySalary: '',
          wDays: '',
          lDays: '',
          calculatedSalary: 0, // Reset calculatedSalary to 0
        });
        toast.success('Employee Salary Created Successfully');
        navigate('/getEmployeeSalary');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const displayLeavesByEmployeeEmail = (employeeEmail) => {
    setSelectedEmployeeEmail(employeeEmail);
  };

  const fillFormWithEmployeeData = (selectedEmployee) => {
    setSelectedEmployeeData(selectedEmployee);
    setData({
      name: selectedEmployee.name,
      email: selectedEmployee.email,
      idNumber: selectedEmployee.idNumber,
      phoneNumber: selectedEmployee.phoneNumber,
      team: selectedEmployee.team,
      daySalary: '',
      wDays: '',
      lDays: '',
    });
  };

  // Calculate the salary when wDays or lDays change
  useEffect(() => {
    const salary = (parseInt(data.wDays) - parseInt(data.lDays)) * parseFloat(data.daySalary);
    setData({ ...data, calculatedSalary: salary }); // Update calculatedSalary in data state
  }, [data.daySalary, data.wDays, data.lDays]);

  return (
    <div className="container mt-5">
      <AdminNavBar />

      <div className="row">
        <div className="col-md-6">
          <h2>Employee List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ID Number</th>
                <th>Phone Number</th>
                <th>Team</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee) => (
                <tr
                  key={employee._id}
                  onClick={() => displayLeavesByEmployeeEmail(employee.email)}
                >
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.idNumber}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.team}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => fillFormWithEmployeeData(employee)}
                    >
                      Fill
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedEmployeeEmail && (
          <div className="col-md-6">
            <h2>Employee Leave List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {employeeLeave
                  .filter((leave) => leave.email === selectedEmployeeEmail)
                  .map((leave) => (
                    <tr key={leave._id}>
                      <td>{leave.email}</td>
                      <td>{leave.type}</td>
                      <td>{leave.time}</td>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.reason}</td>
                      <td>
                        {leave.done ? (
                          <span className="text-success">Completed</span>
                        ) : (
                          <span className="text-warning">Incomplete</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="w-100 bg-white rounded p-3">
            <form onSubmit={createEmployeeSalary}>
              <h2>Create Employee Salary</h2>
              <div className="mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="idNumber">ID Number</label>
                <input
                  type="text"
                  placeholder="Enter ID Number"
                  className="form-control"
                  name="idNumber"
                  value={data.idNumber}
                  onChange={(e) => setData({ ...data, idNumber: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="form-control"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="team">Team</label>
                <input
                  type="text"
                  placeholder="Enter Team"
                  className="form-control"
                  name="team"
                  value={data.team}
                  onChange={(e) => setData({ ...data, team: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="daySalary">Salary for a Day</label>
                <input
                  type="text"
                  placeholder="Enter Salary"
                  className="form-control"
                  name="daySalary"
                  value={data.daySalary}
                  onChange={(e) => setData({ ...data, daySalary: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="wDays">Working Days</label>
                <input
                  type="text"
                  placeholder="Enter Working Days"
                  className="form-control"
                  name="wDays"
                  value={data.wDays}
                  onChange={(e) => setData({ ...data, wDays: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="lDays">Leave Days</label>
                <input
                  type="text"
                  placeholder="Enter Leave Days"
                  className="form-control"
                  name="lDays"
                  value={data.lDays}
                  onChange={(e) => setData({ ...data, lDays: e.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="calculatedSalary">Calculated Salary</label>
                <input
                  type="text"
                  placeholder="Calculated Salary"
                  className="form-control"
                  name="calculatedSalary"
                  value={data.calculatedSalary}
                  onChange={(e) => setData({ ...data, calculatedSalary: e.target.value })}
                  disabled
                />
              </div>
              <button className="btn btn-success">Create Employee Salary</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeSalary;

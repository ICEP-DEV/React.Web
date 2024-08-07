import { Link } from "react-router-dom";
import Header from './Header';

function Employee() {
    const employees = [

        { Id: 101, Name: 'Abhinav', Location: 'Bangalore', Salary: 12345 },

        { Id: 102, Name: 'Abhishek', Location: 'Chennai', Salary: 23456 },

        { Id: 103, Name: 'Ajay', Location: 'Bangalore', Salary: 34567 }
    ];
    return (<div >
        <Header />
        
        <button className="btn btn-primary" style={{width:"100%", margin:'50px 0'}}>Add Employee</button>
        <table id="customers">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Action</th>
            </thead>
            <tbody>
                {employees.map((emp, xid) => (
                    <tr key={xid}>
                        <td>{emp.Id}</td>
                        <td>{emp.Name}</td>
                        <td>{emp.Location}</td>
                        <td>{emp.Salary}</td>
                        <td>
                            <button className="btn btn-success">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    </div>)


}

export default Employee;
import  React from 'react';
import '../App.css';
import EmployeeList from './EmployeeList'
import InputForm from './InputForm'

function Admin(){
    return(
        <div>
        <h1>Admin page</h1>
        <EmployeeList/>  
        <InputForm/>
        </div>
    );
}
export default Admin;
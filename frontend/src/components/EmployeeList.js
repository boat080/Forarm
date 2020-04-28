import React, { useEffect }  from 'react';
import EmployeeCard from './EmployeeCard'
import './EmployeeList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const EmployeeList = ()=>{
    const employees = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const getEmployees = async () => {
        const result = await axios.get(`http://localhost/api/employees`)
       
        const action = {type:'GET_EMPLOYEES',employee: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getEmployees()
      }, [])
       console.log("data",employees)
      if (!employees || !employees.length)
        return (<h2>No data</h2>)

    return(
        <div >
            {
                employees.map((employee, index) => (
                    <ul key={index} style={{ margin: 5 }}>
                        <EmployeeCard  {...employee}  />
                    </ul>
                ))
            }
        </div>
    )


}
export default EmployeeList

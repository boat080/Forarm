import React, { useEffect }  from 'react';
import './EmployeeList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const EmployeeCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getEmployees = async () => {
        const result = await axios.get(`http://localhost/api/employees`)
       
        const action = {type:'GET_EMPLOYEES',employee: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getEmployees()
      }, [])

    const deleteEmployee = async ()=>{
        await axios.delete(`http://localhost/api/employees/${props.no}`)
        dispatch({type:'DELETE_EMPLOYEE',no: props.no })
        getEmployees()
          
    }
    const updateEmployee = async () => {
        await axios.put(`http://localhost/api/employees/${props.no}`,form)
         dispatch(
             {type:'UPDATE_EMPLOYEE',
             no: props.no,
             employee:{...form, no:  props.no}
         })
         getEmployees()
         
       }
         
       
    
    return(
        <div >
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Work/Day</th>
              <th>Tel.</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
            <tr>
              <td>{props.name}</td>
              <td>{props.surname}</td>
              <td>{props.day}</td>
              <td>{props.tel}</td>
              <td>{props.mail}</td>
              <button onClick={deleteEmployee}>Delete</button>
              <button onClick={updateEmployee}>Update</button>
            </tr>
          </table>
        </div>
    )


}
export default EmployeeCard

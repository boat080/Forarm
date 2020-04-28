import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle ={
        color: 'white'
    };

    return(
        <nav>
            <h3>Soutern Infomation Technology</h3>
            <ul className ="nav-links">
                <Link style={navStyle} to="/About">
                    <li><h4 class="btn btn-danger">ตารางทำงานและพนักงาน</h4></li>
                </Link>
                <Link style={navStyle} to="/Admin">
                    <li><h4 class="btn btn-danger">Admin</h4></li>
                </Link>
                <Link style={navStyle} to="">
                    <li><h4 class="btn btn-danger" >Logout</h4></li>
                </Link>

            </ul>
        </nav>
    );
}
export default Nav;
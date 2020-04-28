import  React from 'react';
import '../App.css';
import EmployeeList from './EmployeeList'

function About(){

    return(
        <div class="container">
        <img src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-9/51604566_319720031992427_7073272594857721856_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFag6gJyhPW6ltyQxvYm4ZFZC1VCpIRLjhkLVUKkhEuOA02HxyHD-WeFzGlNhdwKSMCiEyvSuJWExaGTcVAzX_3&_nc_ohc=MerbdiQPxmcAX8ooyA0&_nc_ht=scontent.fbkk2-6.fna&oh=e3b3be26316ea30e0a9f2238cb695ce4&oe=5ECDDF3C" class="rounded-circle" alt="Cinque Terre" width = "300" height ="300"></img>
        <EmployeeList/>
        </div>
    );
}
export default About;
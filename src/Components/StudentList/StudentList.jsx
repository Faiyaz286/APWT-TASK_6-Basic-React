import React from 'react';
import { Link } from 'react-router-dom';
import Student from './Student.jsx';

const StudentList = () => {
    return(
        <div>
            <table className="table table-bordered">
                <tr>
                    <th>Student Name</th>
                    <th>Student Id</th>
                    <th>Passing Year</th>
                    <th>CGPA</th>
                </tr>
                <Student name="Faiyaz Rahman" id="18-38938-3" passingyear="2022" cgpa="3.60" />
                <Student name="Ome roy" id="18-33648-3" passingyear="2022" cgpa="3.94" />
               
            </table>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default StudentList;
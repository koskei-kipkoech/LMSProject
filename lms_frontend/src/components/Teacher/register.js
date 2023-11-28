import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/admin/main/teacher/add/';
function TeacherRegister(){
    const[teacherData,setteacherData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile_number':'',
        'skills':'',
        'status':''
    });
    //change element value
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value, 
        });
    };
    //end
   //submit form
   const submitForm = () => {
    const teacherFormData = {
      'full_name': teacherData.full_name,
      'email': teacherData.email,
      'password': teacherData.password,
      'qualification': teacherData.qualification,
      'mobile_number': teacherData.mobile_number,
      'skills': teacherData.skills,
      'status': teacherData.status
    };

    try{
        axios.post(baseUrl, teacherFormData).then((response)=>{
            console.log(response.data);
        });
    }catch(error){
        console.log(error);
    }
   };
   //end
    return(
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className="card">
                        <h4 className='card-header'>Teacher Register</h4>
                        <div className='card-body'>
                                <form>
                                <div className="mb-3">
                                        <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                                        <input onChange={handleChange} name='full_name' id="exampleInputFullName" type="text" className="form-control" autoComplete="name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                        <input onChange={handleChange} name='email' id="exampleInputEmail" type="email" className="form-control" autoComplete="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                        <input onChange={handleChange} name='password' id="exampleInputPassword" type="password" className="form-control" autoComplete="new-password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputQualification" className="form-label">Qualification</label>
                                        <input onChange={handleChange} name='qualification' id="exampleInputQualification" type="text" className="form-control" autoComplete="off"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputNumber" className="form-label">Mobile Number</label>
                                        <input onChange={handleChange} name='mobile_number' id="exampleInputNumber" type="number" className="form-control" autoComplete="tel" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputSkills" className="form-label">Skills</label>
                                        <textarea onChange={handleChange} name='skills' id="exampleInputSkills" className='form-control' autoComplete="skill"></textarea>
                                    </div>
                                    <button onClick={submitForm} type="button" className="btn btn-primary">Register</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TeacherRegister;
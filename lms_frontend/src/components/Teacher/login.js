import {Link} from 'react-router-dom';

function TeacherLogin(){
    return(
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className="card">
                        <h4 className='card-header'>Teacher Login</h4>
                        <div className='card-body'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputTeacherNamee" className="form-label">TeacherName</label>
                                        <input type="teacherName" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TeacherLogin;
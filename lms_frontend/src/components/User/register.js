import {Link} from 'react-router-dom';

function Register(){
    return(
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className="card">
                        <h4 className='card-header'>User Register</h4>
                        <div className='card-body'>
                                <form>
                                <div className="mb-3">
                                        <label htmlFor="exampleInputUserName" className="form-label">Full Name</label>
                                        <input type="userName" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputUserName" className="form-label">Email</label>
                                        <input type="userName" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputUserName" className="form-label">UserName</label>
                                        <input type="userName" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputUserName" className="form-label">Intrests</label>
                                        <textarea className='form-control'></textarea>
                                        <div id="emailHelp" class="form-text">Football, Basketball, Handball, etc.,.</div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;
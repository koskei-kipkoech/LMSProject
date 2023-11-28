import {Link} from 'react-router-dom';

function CategoryUnits(){
    return(
        <div className="container mt-5">
        <h3 className="pb-1 mb-4 mt-5"> Grade 1 Units <a href="/" className="float-end">See All</a></h3>
            <div className="row">  
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/*Pagination Start*/}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item"><a className="page-link" href="/">Next</a></li>
                </ul>
            </nav>
            {/*End  Pagination*/}
        </div>
    );
}
export default CategoryUnits; 
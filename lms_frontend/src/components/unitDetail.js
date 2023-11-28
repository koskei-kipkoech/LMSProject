import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function UnitDetail() {
  const { unit_id } = useParams();

  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-4" >
                <img src="/student.png" className="img-thumbnail" alt="..."/>
            </div>
            <div className="col-8">
                <h3>Unit Title</h3>
                <p className='font-monospae'>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.</p>
                <p className='fw-bold'>Unit  By:<Link to='/teacher-detail/1'> Teacher 1</Link></p>
                <p className='fw-bold'>Duration:  3Hrs  20Mins</p>
                <p className='fw-bold'>Total  Enrolled:  45  Students</p>
                <p className='fw-bold'>Ratings: 4/5</p>

            </div>
        </div>
        {/*Unit Videos*/}
        <div className="card mt-4">
            <div className="card-header">
            <h3><span className="fw-bold">Unit Videos</span></h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="fw-bold">Introduction Unit</span>
                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#vedioModal1">
                        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'cornflowerblue' }}></i>
                    </button>
                    {/*Videos Model Start*/}
                    <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Introduction Video </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Videos Model*/}
                </li>
                <li className="list-group-item">
                    <span className="fw-bold">Topic 1 </span>
                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#vedioModal1">
                        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'cornflowerblue' }}></i>
                    </button>
                    {/*Videos Model Start*/}
                    <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Topic 1 Video</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Videos Model*/}
                </li>
                <li className="list-group-item">
                    <span className="fw-bold">Topic2 </span>
                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#vedioModal1">
                        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'cornflowerblue' }}></i>
                    </button>
                    {/*Videos Model Start*/}
                    <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Topic 2 Video </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Videos Model*/}
                </li>
                <li className="list-group-item">
                    <span className="fw-bold">Topic 3 </span>
                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#vedioModal1">
                        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'cornflowerblue' }}></i>
                    </button>
                    {/*Videos Model Start*/}
                    <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel"> Topic 3 Video </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Videos Model*/}
                </li>
                <li className="list-group-item">
                    <span className="fw-bold"> Topic 4</span>
                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#vedioModal1">
                        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'cornflowerblue' }}></i>
                    </button>
                    {/*Videos Model Start*/}
                    <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel"> Topic 4 Video </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Videos Model*/}
                </li>
                <li className="list-group-item">
                    <span className="fw-bold">Topic 5 </span>
                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#vedioModal1">
                        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'cornflowerblue' }}></i>
                    </button>
                    {/*Videos Model Start*/}
                    <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel"> Topic 5 Video</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Videos Model*/}
                </li>
            </ul>
        </div>

        <h3 className="pb-1 mb-4 mt-5"> Related Units </h3>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="/student.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ">
                 <div className="card">
                    <img src="/student.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"> <a href ="/">Unit Title</a></h5>
                    </div>
                </div>
            </div> 
        </div>    
    </div>
  );
}

export default UnitDetail;

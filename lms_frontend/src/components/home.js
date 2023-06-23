import React from 'react';
import {Link} from 'react-router-dom';
import AllUnits from './allunits';
import { useEffect } from 'react';

function Home() {
    useEffect(()=>{
        document.title='LMS / Home Page ';
    });
    return (
        <div className="container mt-4">
            {/*Latest Unit*/}
            <h3 className="pb-1 mb-4 mt-5"> Latest Units <Link to="/all-units" className="float-end">See All</Link></h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="student.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to="/detail/1">Unit Title</Link></h5>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="student.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <a href ="/">Unit Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="student.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <a href ="/">Unit Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Latest Unit*/}
            {/*Featured  Teachers*/}
            <h3 className="pb-1 mb-4 mt-5">Featured Teachers <Link to="/featured-teachers" className="float-end">See All</Link></h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="teacher.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to ="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='fw-bold'>Views: 207</span>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="teacher.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to ="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='fw-bold'>Views: 176</span>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="teacher.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <Link to ="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span className='fw-bold'>Views: 167</span>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/*End Featured  Teachers*/}
             {/*Popular  Units*/}
            <h3 className="pb-1 mb-4 mt-5">Popular  Units <Link to="/popular-units" className="float-end">See All</Link></h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="background.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <a href ="/">Unit Name</a></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.7/5</span>
                                <span className='float-end'>Views: 167</span>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="background.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <a href ="/">Unit Name</a></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.4/5</span>
                                <span className='float-end'>Views: 147</span>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="background.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> <a href ="/">Unit Name</a></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.3/5</span>
                                <span className='float-end'>Views: 117</span>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Popular Units*/}
            {/*Student Testimonial*/}

            <h3 className="pb-1 mb-4 mt-5">Student Testimonial <a href="/" className="float-end">See All</a></h3>
                <div id="carouselExampleCaptions" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <figure className="text-center">

                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                            </figure>  
                        </div>

                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>Toil and sweat in order to reap your hardwork.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>         
                        </div>

                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>Education is the Key to success.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>     
                        </div>
                    </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                </div>                
            {/*End Student Testimonial*/}
        </div>
    );
}
export default Home;

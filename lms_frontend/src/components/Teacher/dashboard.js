import {Link} from 'react-router-dom';
import TeacherSidebar from './sidebar';

function TeacherDashboard(){
    return(
        <div className='container  mt-4'>
            <div className='row'>
                <aside className="col-md-2">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                    <h5 className='bold' style={{ color: 'dark' }}> Teacher Dashboard</h5>
                    
                </section>
            </div>
        </div>
    )

}

export default TeacherDashboard;


import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BlogList from "../components/BlogList";

const AdminPage = () => {

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h1>Admin</h1>
                <div>
                    <Link to='/blogs/create' className='btn btn-success'>
                        Create New
                    </Link>
                </div>
            </div>
            <BlogList isAdmin={true}/>
        </div>
    );
}


export default AdminPage;
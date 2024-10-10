import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoadingSpinner from "../components/LoadingSpinner";
import { bool } from "prop-types";
import PagiNation from "./Pagination";

const BlogList = ({isAdmin = false}) => {

    const history = useHistory();
    const [posts, setPosts] = useState([]) ;
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPosts, setNumberOfPosts] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const limit = 5;

    useEffect(() => {
        setNumberOfPages(Math.ceil(numberOfPosts/limit));
    }, [numberOfPosts]);

    const getPosts = (page = 1) => {
        setCurrentPage(page);
        let params = {
            _page: page,
            _limit: limit,
            _sort: 'id',
            _order: 'desc'
        }

        if ( !isAdmin ) {
            params = { ...params, publish: true};
        }

        axios.get(`http://localhost:3001/posts`,{ 
            params: params
        }).then((res) => {
            console.log(res.data.length);
            setNumberOfPosts(res.headers['x-total-count']);
            setPosts(res.data);
            setLoading(false);
        })
    }

    const deleteBlog = (e, id) => {
        e.stopPropagation();        
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
        });
    };

    useEffect(() => {
        getPosts();
    }, []);
 

    if(loading){
        return (
          <LoadingSpinner />
        );
    };

    if(posts.length === 0){
        return (
            <div>No blog posts found</div>
        );
    };

    const renderBlogList = () => {
        return posts.filter(post => {
            return isAdmin || post.publish
        }).map( post => {
            return (
                <Card 
                    key = {post.id} 
                    title = {post.title} 
                    onClick={() => { history.push(`/blogs/${post.id}`)}} 
                >
                    { isAdmin ? (
                    <div>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={(e) => deleteBlog(e, post.id)}  // id 값을 넘겨줌
                            >
                            Delete
                        </button>
                    </div> ) : null}
                </Card>
            ) 
        }); 
    }

    return (
        <div>
            {renderBlogList()}
            <PagiNation 
                currentPage={currentPage} 
                numberOfPages={numberOfPages}
                onClick={getPosts}
                limit
            />
        </div>
    )
};

BlogList.propTypes = {
    isAdmin: bool
};

// BlogList.defaultProps = {
//     isAdmin: false
// };

export default BlogList;
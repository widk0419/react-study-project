import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
    const { id } = useParams();
    const [post, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
            setPosts(res.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        getPost(id);
    }, []);

    if(loading) {
        return <LoadingSpinner />
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPage;
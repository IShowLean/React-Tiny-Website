import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })


    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1 style={{margin: '15px 0'}}>You have opened the page of post with ID = {params.id}.</h1>
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                :
                <div>
                    <div><strong>{post.id}. {post.title}</strong></div>
                    <div>{post.body}</div>
                </div>
            }
            <h1>Comments</h1>
            {isComLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                : comments.map(comm =>
                    <div key={comm.id} style={{marginTop: '15px'}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )
            }
        </div>
    );
};

export default PostIdPage;
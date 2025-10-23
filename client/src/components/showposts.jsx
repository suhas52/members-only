import { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from "../App";
import { Alert, ButtonBase } from "@mui/material";


function Posts() {
    
    const [posts, setPosts] = useState([]);
    const { user } = useContext(UserContext);

    const getPosts = async () => {
            const response = await fetch('http://localhost:3000/api/getposts');
            const posts = await response.json();
            setPosts(posts)
        }
    
    useEffect( () => {
        getPosts();
        
    }, [])

    const handleDeletePost = async (id) => {
        const response = await fetch('http://localhost:3000/api/deletepost', {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({id: id}),
            credentials: "include"
        })
        getPosts();
    }
    
    return (
        <div className="post-cards">
        {posts.map((post) => {
        return <Card key={post.id}>
        <CardContent>
        <Typography sx={{fontSize: 12, color: 'text.secondary'}}>
            {user.is_member ? post.username : "Anonymous"}
        </Typography>
        <Typography gutterBottom sx={{fontWeight: "bold", fontSize: 16 }}>
        {post.title}
        </Typography>
        <Typography gutterBottom sx={{color: 'text.secondary' }}>
            {post.body}
        </Typography>
        </CardContent>
        <CardActions>
            {user.is_member && user.username === post.username ? <Button onClick={() => handleDeletePost(post.id)}>Delete</Button> : null}
        </CardActions>
        </Card>
        })}
        </div>
    )
}

export default Posts;
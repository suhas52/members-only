import { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from "../App";


function Posts() {
    
    const [posts, setPosts] = useState([]);
    const { user, loading} = useContext(UserContext);
    
    useEffect( () => {
        const getPosts = async () => {
            const response = await fetch('http://localhost:3000/api/getposts');
            const posts = await response.json();
            setPosts(posts)
        }
        
        getPosts();
        
    }, [])
    
    return (
        <div className="post-cards">
        {posts.map((post) => {
        return <Card key={post.title}>
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
        </Card>
        })}
        </div>
    )
}

export default Posts;
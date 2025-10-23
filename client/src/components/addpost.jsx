import { useState, Fragment, useContext } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UserContext } from "../App";



function AddPost() {
    const [open, setOpen] = useState(false);
    const { user } = useContext(UserContext);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const now = new Date();
        const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
        
        const response = await fetch("http://localhost:3000/api/addpost", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...formData, id: user.id, time_posted: local}),
            credentials: 'include'
        })
        console.log(await response.json())
    }
    
    return ( 
        <Fragment>
        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
        Add Post
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
        <DialogContentText>
        Create a post for everyone to see!
        </DialogContentText>
        <form onSubmit={handleSubmit} id="create-post-form">
        <TextField
        required
        onChange={handleChange}
        margin="dense"
        name="title"
        label="Title"
        type="text"
        fullWidth
        variant="standard"
        />
        <TextField
        required
        onChange={handleChange}
        margin="dense"
        name="body"
        label="Body"
        type="text"
        fullWidth
        variant="standard"
        multiline
        />
        </form>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="create-post-form">
        Post!
        </Button>
        </DialogActions>
        </Dialog>
        </Fragment>
    )
}

export default AddPost;
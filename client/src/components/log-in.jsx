import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

function LogIn() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/log-in", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        if (response.status === 200) window.location.href = '/';
        
        
    }

    return (
        <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <div>
        <TextField
        required
        label="Username"
        placeholder="john123"
        name="username"
        onChange={handleChange}
        value={formData.username}
        />
        <TextField
        required
        label="Password"
        placeholder="password"
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        />
        </div>
        <Button type="submit">Submit</Button>
        </Box>
    )
}

export default LogIn;
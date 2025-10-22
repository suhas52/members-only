import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'



function SignUp() {
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        response = await fetch("http://localhost:3000/api/sign-up", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        console.log(response)
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
        <TextField
        required
        label="Confirm Password"
        type="password"
        placeholder="Hello World"
        name="confirm_password"
        onChange={handleChange}
        value={formData.confirm_password}
        />
        <TextField
        required
        label="First Name"
        placeholder="John"
        name="first_name"
        onChange={handleChange}
        value={formData.first_name}
        />
        <TextField
        required
        label="Last Name"
        placeholder="Smith"
        name="last_name"
        onChange={handleChange}
        value={formData.last_name}
        />
        </div>
        <Button type="submit">Submit</Button>
        </Box>
    );
}

export default SignUp;
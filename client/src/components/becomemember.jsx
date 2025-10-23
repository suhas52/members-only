import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Button, TextField } from "@mui/material";



function BecomeMember() {
    const { user } = useContext(UserContext);
    
    const [passcode, setPasscode] = useState('');
    
    const handleChange = (e) => {
        setPasscode(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/togglemember', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({passcode: passcode, id: user.id}),
            credentials: "include"
        })
        const data = await response.json()
        console.log(data)
        
        
        
    }
    
    return (
        <form
        onSubmit={handleSubmit}>
        <TextField
        required
        name="passcode"
        label="passcode"
        helperText="Please enter secret passcode to become a member"
        value={passcode}
        onChange={handleChange}
        >
        
        </TextField>
        <Button type="submit">Submit</Button>
        </form>
    )
    
}

export default BecomeMember;
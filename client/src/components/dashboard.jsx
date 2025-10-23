import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import { useContext } from 'react';
import { UserContext } from '../App';

function DashboardMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { user } = useContext(UserContext);
    
    const handleLogout = async () => {
        const response = await fetch('http://localhost:3000/api/log-out', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user }),
            credentials: 'include'
        });
        console.log("wtf", user)
        if(await response.status) window.location.href = '/';
    }
    
    return (
        <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        >
        Dashboard
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
            list: {
                'aria-labelledby': 'basic-button',
            },
        }}
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        </div> 
    )
}

export default DashboardMenu;
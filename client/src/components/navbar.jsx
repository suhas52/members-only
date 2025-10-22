import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function UnSignedNavbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
        <Button
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        >
        Members-Only
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Home
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">SignUp</Button>
        </Toolbar>
        </AppBar>
        </Box>
    )
}

function Signed() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
        <Button
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        >
        Members-Only
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Home
        </Typography>
        <Button color="inherit">Profile</Button>
        </Toolbar>
        </AppBar>
        </Box>
    )
}

export { UnSignedNavbar, Signed }
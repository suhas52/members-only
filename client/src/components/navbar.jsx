import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom'

import DashboardMenu from './dashboard';
import AddPost from './addpost';
import BecomeMember from './becomemember';

function MainNavbar() {
    
    const { user, loading } = useContext(UserContext);
    
    
    if (loading) {
        return <nav>Loading...</nav>;
    }
    
    const isLoggedIn = user && user.user !== null;
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
        
        
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Members-only
        </Typography>
        
        <Button
        href="/"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        >
        Home
        </Button>
        {isLoggedIn ? (
            <>
            <Button href="/member" color="inherit">
            Become Member
            </Button>
            <AddPost />
            <DashboardMenu />
            </>
        ) : (
            <>
            <Button href="/login" color="inherit">Login</Button>
            <Button href="/signup" color="inherit">SignUp</Button>
            </>
        )}
        </Toolbar>
        </AppBar>
        </Box>
    );
}

export default MainNavbar;
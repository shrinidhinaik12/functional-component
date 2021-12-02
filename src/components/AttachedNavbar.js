import React from 'react'
import { Button } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AttachedNavbar(){
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ opacity: "70%", background: "black", height: "3.5vw" }} position="static">
                    <Toolbar>
                        <IconButton style={{ paddingBottom: "0.8%"}}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography style={{ paddingBottom: "0.8%", textAlign: "center"}} component="div" sx={{ flexGrow: 1 }}>
                            P A C M A <span style={{ color: "#ed0295"}}> N</span>
                        </Typography>
                        <Button style={{ paddingBottom: "0.8%"}} color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default AttachedNavbar

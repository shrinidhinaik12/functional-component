import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
import JSONDATA from './MOCK_DATA.json'

function ContentNavbar() {

    function open(){
        var pop = document.getElementById('filter-data');
        pop.classList.toggle("active")

        var fade = document.getElementById("container");
        fade.classList.toggle("fade")
        console.log("Button Clicked");
    }

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="nav-wrapper">
            <div className="start">
                <div> 
                    <div className="search-btn"> <IconButton color="primary" aria-label="Search" onClick={open} ><SearchIcon /></IconButton> </div>
                    <div className="filter-data" id="filter-data">
                    <TextField id="basic-outlined" variant="outlined" label="Search" className="search-bar" type="text" onChange={event => {setSearchTerm(event.target.value) }} />
                    <div>{JSONDATA.filter((val)=> {
                        if(searchTerm == "") {
                            return val
                        } else if (val.firstname.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        } else if (val.lastname.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return ( 
                            <div className="JSON-list">{val.firstname} {val.lastname}</div>
                        )
                    })}</div></div>
                </div>
            <div>
                <button className="application-element">ALL APPLICATIONS</button>
            </div>
            </div>
        
            <ul id="navigation">
                <li><a href=""><span className="status-head"></span>APPLICATION STATUS</a></li>
                <li><a href=""><span className="nav-number-data">43</span> PRODUCTIONS</a></li>
                <li><a href=""><span className="nav-number-data">7</span> BUILD</a></li>
                <li><a href=""><span className="nav-number-data">5</span> INTAKE</a></li>
            </ul>
            <div className="security-btn">
                <Button style={{ color: "white"}}>SECURITY</Button>
            </div>
        </div>
    )
}

export default ContentNavbar

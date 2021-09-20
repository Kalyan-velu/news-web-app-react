import React from 'react';
import {IconButton, Toolbar} from "@mui/material";
import {Facebook, FavoriteBorder, GitHub, Instagram, LinkedIn} from "@mui/icons-material";

function Footer() {
    return (
        <div style={{
            display: "grid",
            justifyContent: "center",
            backgroundColor: "grey"
        }}>
            <Toolbar>

                <IconButton>
                    <Instagram/>
                </IconButton>

                <IconButton>
                    <Facebook/>
                </IconButton>
                <IconButton>

                    <LinkedIn/>
                </IconButton>
                <IconButton>
                    <GitHub/>
                </IconButton>
            </Toolbar>
            <p>Designed and built with <FavoriteBorder/> by Kalyan </p>
        </div>
    )
}

export default Footer;


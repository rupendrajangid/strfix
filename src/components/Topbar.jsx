import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Topbar = () => {
    return (
        <AppBar position="static" className="bg-indigo-600">
            <Toolbar>
                <Typography variant="h6" className="text-white">
                    Strfix
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;

import React, { useState } from "react";
import { MD5 } from "crypto-js";
import { TextField, Typography, Grid, Box, Paper } from "@mui/material";

const TextareaMD5Converter = () => {
    const [text, setText] = useState("");
    const [md5Hash, setMD5Hash] = useState("");

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        const hash = MD5(newText).toString();
        setMD5Hash(hash);
    };

    return (
        <Box className="bg-white shadow-md p-6 rounded-md">
            <Typography variant="h6" className="font-bold mb-4 text-indigo-600">
                MD5 Hash Generator
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Input Text"
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={6}
                        placeholder="Type your text here..."
                        value={text}
                        onChange={handleTextareaChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className="p-4 bg-gray-50">
                        <TextField
                            variant="filled"
                            fullWidth
                            multiline
                            minRows={6}
                            value={md5Hash}
                            placeholder="MD5 Hash"
                            disabled
                            id="filled-disabled"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TextareaMD5Converter;

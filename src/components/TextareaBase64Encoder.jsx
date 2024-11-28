import React, { useState } from "react";
import { TextField, Typography, Box, Grid, Paper } from "@mui/material";

const TextareaBase64Encoder = () => {
    const [text, setText] = useState("");
    const [base64Encoded, setBase64Encoded] = useState("");

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        try {
            const encoded = btoa(newText);
            setBase64Encoded(encoded);
        } catch (error) {
            setBase64Encoded("Invalid text input for Base64 encoding");
        }
    };

    return (
        <Box className="bg-white shadow-md p-6 rounded-md">
            <Typography variant="h6" className="font-bold mb-4 text-indigo-600">
                Base64 Encoder
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Plain Text"
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
                            value={base64Encoded}
                            placeholder="Base64 Encoded"
                            disabled
                            id="filled-disabled"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TextareaBase64Encoder;

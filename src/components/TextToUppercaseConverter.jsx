import React, { useState } from "react";
import { TextField, Typography, Grid, Box, Paper } from "@mui/material";

const TextToUppercaseConverter = () => {
    const [text, setText] = useState("");

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setText(newText.toUpperCase());
    };

    return (
        <Box className="bg-white shadow-md p-6 rounded-md">
            <Typography variant="h6" className="font-bold mb-4 text-indigo-600">
                Text to Uppercase Converter
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Input Text"
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={6}
                        placeholder="Type or paste your text here..."
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
                            value={text}
                            placeholder="Uppercase Output"
                            disabled
                            id="filled-disabled"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TextToUppercaseConverter;

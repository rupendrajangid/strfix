import React, { useState } from "react";
import { TextField, Typography, Box, Grid, Paper } from "@mui/material";

const TextareaCounter = () => {
  const [text, setText] = useState("");

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const countCharacters = () => text.length;

  const countWords = () => {
    const words = text.split(/\s+/);
    return words.filter((word) => word !== "").length;
  };

  const countLines = () => {
    const lines = text.split("\n");
    return lines.length;
  };

  return (
      <Box className="bg-white shadow-md p-6 rounded-md">
        <Typography variant="h6" className="font-bold mb-4 text-indigo-600">
          Text Analyzer
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
            <Paper className="p-4 bg-gray-50 h-auto">
              <Typography
                  variant="subtitle1"
                  className="mb-2 font-semibold text-gray-600"
              >
                Analysis:
              </Typography>
              <Typography variant="body1" className="mb-1">
                <strong>Characters:</strong> {countCharacters()}
              </Typography>
              <Typography variant="body1" className="mb-1">
                <strong>Words:</strong> {countWords()}
              </Typography>
              <Typography variant="body1">
                <strong>Lines:</strong> {countLines()}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
  );
};

export default TextareaCounter;

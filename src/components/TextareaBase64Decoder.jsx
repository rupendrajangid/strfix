import React, { useState } from "react";
import { TextField, Typography, Box, Grid, Paper } from "@mui/material";

const TextareaBase64Decoder = () => {
  const [base64Text, setBase64Text] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleTextareaChange = (event) => {
    const newBase64Text = event.target.value;
    setBase64Text(newBase64Text);
    try {
      const decoded = atob(newBase64Text);
      setDecodedText(decoded);
    } catch (error) {
      setDecodedText("Invalid Base64 input");
    }
  };

  return (
      <Box className="bg-white shadow-md p-6 rounded-md">
        <Typography variant="h6" className="font-bold mb-4 text-indigo-600">
          Base64 Decoder
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
                label="Base64 Input"
                variant="outlined"
                fullWidth
                multiline
                minRows={6}
                placeholder="Type your Base64-encoded text here..."
                value={base64Text}
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
                  value={decodedText}
                  placeholder="Decoded Text"
                  disabled
                  id="filled-disabled"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
  );
};

export default TextareaBase64Decoder;

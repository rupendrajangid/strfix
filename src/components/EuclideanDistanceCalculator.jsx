import React, { useState } from "react";
import { TextField, Typography, Box, Grid, Paper } from "@mui/material";

const EuclideanDistanceCalculator = () => {
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return (
      <Box className="bg-white shadow-md p-6 rounded-md">
        <Typography variant="h6" className="font-bold mb-4 text-indigo-600">
          Euclidean Distance Calculator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                    label="x1"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={x1}
                    onChange={(e) => setX1(parseFloat(e.target.value) || 0)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                    label="y1"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={y1}
                    onChange={(e) => setY1(parseFloat(e.target.value) || 0)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                    label="x2"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={x2}
                    onChange={(e) => setX2(parseFloat(e.target.value) || 0)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                    label="y2"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={y2}
                    onChange={(e) => setY2(parseFloat(e.target.value) || 0)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="p-4 bg-gray-50">
              <Typography
                  variant="subtitle1"
                  className="mb-2 font-semibold text-gray-600"
              >
                Calculated Distance:
              </Typography>
              <Typography
                  variant="h5"
                  className="text-indigo-600 font-bold"
                  data-testid="distance"
              >
                {distance.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
  );
};

export default EuclideanDistanceCalculator;

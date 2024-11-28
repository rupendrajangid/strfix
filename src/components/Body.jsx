import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import TextareaCounter from "./TextareaCounter";
import TextareaMD5Converter from "./TextareaMD5Converter";
import TextareaBase64Encoder from "./TextareaBase64Encoder";
import TextareaBase64Decoder from "./TextareaBase64Decoder";
import EuclideanDistanceCalculator from "./EuclideanDistanceCalculator";
import TextToLowercaseConverter from "./TextToLowercaseConverter";
import TextToUppercaseConverter from "./TextToUppercaseConverter";

const Body = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Grid container spacing={4}>
                {/* Meta */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                Meta
                            </Typography>
                            <TextareaCounter />
                        </CardContent>
                    </Card>
                </Grid>

                {/* MD5 */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                MD5
                            </Typography>
                            <TextareaMD5Converter />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Base64 Encode */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                Base64 Encode
                            </Typography>
                            <TextareaBase64Encoder />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Base64 Decode */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                Base64 Decode
                            </Typography>
                            <TextareaBase64Decoder />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Uppercase */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                upperCASE
                            </Typography>
                            <TextToUppercaseConverter />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Lowercase */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                lowerCASE
                            </Typography>
                            <TextToLowercaseConverter />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Euclidean Distance */}
                <Grid item xs={12}>
                    <Card className="shadow-md">
                        <CardContent>
                            <Typography variant="h5" className="font-bold mb-4">
                                Euclidean Distance
                            </Typography>
                            <EuclideanDistanceCalculator />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Body;

import React from "react"
import {Grid, Typography, Input} from "@mui/material";

const AWS = require('aws-sdk');
const ID = '';
const SECRET = '';
const REGION = '';
const BUCKET_NAME = 'bucket-semillero2';

export const App = () => {


    AWS.config.update({
        accessKeyId: ID,
        secretAccessKey: SECRET
    });

    const myBucket = new AWS.S3({
        params: { Bucket: BUCKET_NAME},
        region: REGION,
    })

    const handleFileInput = (event) => {
        console.log(event.target.files[0])
    };

    return (
        <>
        <Grid container style={{ height: '30vh'}} alignItems="center" justifyContent="center" >
        <Typography variant="h3">Semillero de AWS</Typography>
        </Grid>
        
        <Grid container  direction="column" style={{ height: '40vh' }} alignItems="center" justifyContent="center" >
            <Typography variant="h4"  gutterBottom="true">   Sube tu archivo .json para que se guarde en nuestro bucket de s3</Typography>
            <Typography variant="h4" gutterBottom="true">   Luego, los datos del archivo serán guardados en DynamoDB</Typography>
            <Input  color="primary"
            disableUnderline="false" 
            accept=".json"
            id="contained-button-file"
            type="file"
            onChange={handleFileInput}
            />
        </Grid>      
        </>
    )  
};
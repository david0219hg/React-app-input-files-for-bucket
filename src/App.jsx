import React from "react"
import {Grid} from "@mui/material";

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
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <h1> Sube tu archivo .json para que se guarde en nuestro bucket de s3</h1>
            <h2> Luego, los datos del archivo serán guardados en DynamoDB</h2>
            <br></br>
            <br></br>
            <input
            accept=".json"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileInput}
            />
        </Grid>      
        </>
    )  
};
import React from "react"
import {Grid, Typography, Input} from "@mui/material";

const AWS = require('aws-sdk');
const BUCKET_NAME = 'bucket-semillero-final';

export const App = () => {

    const request = new AWS.HttpRequest('http://169.254.169.254/latest/meta-data/instance-id');
    console.log(request)

    const s3 = new AWS.S3({   
        region: 'us-east-1',
        accessKeyId: request.accessKeyId,
        secretAccessKey:request.SecretAccessKey
        });

    const handleFileInput = (event) => {
        const file = event.target.files[0]
        const parameters = {Bucket: BUCKET_NAME,
        Key: 'json_file.json',
        Body: file
        };
        s3.upload(parameters, (err, data) => {
            console.log(data)
            if (err) {
              console.log(err);
            } else {
              console.log(`Archivo subido a S3: ${data.Location}`)};
        });
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
import React from "react"
import {Grid, Typography, Input} from "@mui/material";

const AWS = require('aws-sdk');
const BUCKET_NAME = 'bucket-semillero-final';

export const App = () => {
    let response = null
    const apicredentials = async() => {
        let response = null
        try {
            const request = await fetch('http://169.254.169.254/latest/meta-data/iam/security-credentials/access_s3_final')
            console.log(request)
            response = request.json()
            console.log(request)
            console.log(typeof response,response)
    
        } catch (error) {
            
        }    
        return response
    }
    const apiresponse = apicredentials()

    const s3 = new AWS.S3({   
        region: 'us-east-1',
        accessKeyId: apiresponse.accessKeyId,
        secretAccessKey:apiresponse.SecretAccessKey
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
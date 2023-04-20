import React from "react"
const AWS = require('aws-sdk');
const BUCKET_NAME = 'bucket-semillero-final';

export const App = () => {

    const s3 = new AWS.S3();
    const ID = '';
    const SECRET = '';
    
    AWS.config.update({
        accessKeyId: ID,
        secretAccessKey: SECRET
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
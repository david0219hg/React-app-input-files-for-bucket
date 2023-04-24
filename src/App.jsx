import React from "react";

import awsLogo from "./assets/images/awsLogo.png";
import upload from "./assets/images/upload.png";
import "./style.css";

const AWS = require("aws-sdk");
const BUCKET_NAME = "bucket-semillero-final";
const credentials = new AWS.CredentialProviderChain();

export const App = () => {
  console.log(credentials)

  
  const s3 = new AWS.S3({credentials:credentials});
  const handleFileInput = (event) => {
    const file = event.target.files[0];
    const parameters = {
      Bucket: BUCKET_NAME,
      Key: "json_file.json",
      Body: file,
    };
    s3.upload(parameters, (err, data) => {
      console.log(data);
      if (err) {
        console.log(err);
      } else {
        console.log(`Archivo subido a S3: ${data.Location}`);
      }
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="card-content-block-1">
            <div className="header">
              <span className="title">Semillero de</span>
              <img src={awsLogo} alt="AWS logo" className="aws-logo" />
            </div>
            <div className="upload-box">
              <div className="custom-input-file">
                <label htmlFor="inputFile"></label>
                <input
                  type="file"
                  accept=".json"
                  id="inputFile"
                  className="input-file"
                  onChange={handleFileInput}
                />
                Subir archivo...
              </div>
            </div>
            <div className="footer">
              <p className="text">
                Sube tu archivo .json para que se guarde en nuestro bucket de s3
              </p>
              <p className="text">
                Luego, los datos del archivo serán guardados en DynamoDB
              </p>
            </div>
          </div>
          <div className="card-content-block-2">
            <img src={upload} alt="Upload cloud" className="upload-image" />
          </div>
        </div>
      </div>
    </>
  );
};

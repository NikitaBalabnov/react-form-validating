import { CloudUpload, InsertDriveFile } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

const FormDropZone = ({ control, name }) => {
  return (
   <Controller control={control} name={name} defaultValue = {[]} render ={({field: {onBlur, onChange, value}}) =>(
    <>
        <Dropzone onDrop={onChange} className='dropzone'>
            {({getRootProps, getInputProps}) => <Paper variant="outlined" {...getRootProps()}>
            <CloudUpload/> 
            <input {...getInputProps()} name = {name} onBlur={onBlur}/>
            <p>Drag 'n' drop some files here, or click to select file or group of files</p>
            </Paper>
            }
        </Dropzone>
        <List>
            {value && (
                value.map((f,index) =>(
                    <ListItem key={index}>
                        <ListItemIcon>
                            <InsertDriveFile/>
                        </ListItemIcon>
                        <ListItemText primary={f.name} secondary={f.size}/>
                    </ListItem>
                ))
            )}
        </List>
    </>
   )}/>
  )
};

export default FormDropZone;

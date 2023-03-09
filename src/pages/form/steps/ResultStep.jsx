import { InsertDriveFile } from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useData } from "../../../components/DataContext";
import MyConfetti from "../../../components/MyConfetti";

const ResultStep = () => {
  const [confetti, setConfetti] = useState(false);
  const { data } = useData();
  const fields = Object.entries(data).filter(
    (item) =>
      item[0] !== "files" && item[0] !== "hasPhone" && item[1] !== undefined
  );
  const { files } = data;
  const StatusCode = "200";
  const handleSubmit = async () => {
    const formData = new FormData();

    if (files) {
      files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }
    fields.forEach((field) => {
      formData.append(field[0], field[1]);
    });
    const response = await fetch("here is server", {
      method: "POST",
      body: formData,
    });
    if (StatusCode == "200") {
      swal({
        title: "Good Job!!",
        icon: "success",
      });
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 4500);
    }
  };
  return (
    <>
      <Box sx={{ marginBottom: "13px" }}>
        <Typography sx={{ marginBottom: "15px" }} variant="h5" component="h2">
          Form Values
        </Typography>
        <TableContainer sx={{ marginBottom: "13px" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields &&
                fields.map((field) => (
                  <TableRow key={field[0]}>
                    <TableCell>{field[0]}</TableCell>
                    <TableCell align="right">{field[1].toString()}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files.length > 0 && (
          <>
            <Typography
              sx={{ marginBottom: "15px" }}
              variant="h5"
              component="h4"
            >
              Files
            </Typography>
            <List>
              {files.map((f, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size} />
                  </ListItem>
                );
              })}
            </List>
          </>
        )}
      </Box>
      <div className="result_actions">
        <div className="">
          <Button variant="text">
            <Link className="result_link" to="/form/step-1">
              Start over
            </Link>
          </Button>
        </div>
        <Button onClick={handleSubmit} variant="contained">
          SUBMIT
        </Button>
      </div>
      {confetti && <MyConfetti/>}
    </>
  );
};
//
export default ResultStep;

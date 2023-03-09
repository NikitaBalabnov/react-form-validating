import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FormStep1 from "./steps/FormStep1";
import "./Form.css";
import FormStep2 from "./steps/FormStep2";
import FormStep3 from "./steps/FormStep3";
import ResultStep from "./steps/ResultStep";
const Form = () => {
  {console.log(window.innerWidth)}
  return (
    <Box
      sx={{
        backgroundColor: "rgb(238, 238, 238)",
        width: "450px",
        height: "auto",
        borderRadius: "5px",
        padding: "30px 20px",
      }}
    >
      <Routes>
        <Route path="step-1" element={<FormStep1 />} />
        <Route path="step-2" element={<FormStep2 />} />
        <Route path="step-3" element={<FormStep3 />} />
        <Route path="result" element={<ResultStep />} />
      </Routes>
      
    </Box>
  );
};

export default Form;

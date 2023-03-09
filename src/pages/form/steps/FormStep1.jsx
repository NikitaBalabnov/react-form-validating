import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../components/DataContext";
const FormStep1 = () => {
  const {data, setValues} = useData()
  const navigate = useNavigate()
  const schema = object({
      Name: string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required("First name is a required field")
      .min(2,'First name should contain more than 1 latter'),
      Surname: string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last  name is a required field"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {Name: data?.Name, Surname: data?.Surname}
  });

  const onSubit = (data) => { 
    navigate('/form/step-2')
    setValues(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubit)} className="step1">
      <div className="step1_inputs">
        <TextField
          className="input"
          {...register("Name")}
          autoComplete="off"
          label="First Name"
          name="Name"
          variant="outlined"
          error={!!errors.Name}
          helperText={errors?.Name?.message}
        />
        <TextField
          className="input"
          {...register("Surname")}
          autoComplete="off"
          label="Last Name"
          name="Surname"
          variant="outlined"
          error={!!errors.Surname}
          helperText={errors?.Surname?.message}
        />
      </div>
      <div className="">
        <Button type="submit" sx={{ maxWidth: "98px" }} variant="contained">
          Go next
        </Button>
      </div>
    </form>
  );
};

export default FormStep1;

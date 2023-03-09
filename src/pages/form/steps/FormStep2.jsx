import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import parsePhoneNumberFromString from "libphonenumber-js";
import "yup-phone";
import { useData } from "../../../components/DataContext";
const FormStep2 = () => {
  const { data, setValues } = useData();
  const navigate = useNavigate();
  const schema = object({
    email: string()
      .email("Invalid form of email")
      .required("This field is required"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: { email: data?.email, phone: data?.phone, hasPhone: data?.hasPhone },
  });
  const hasPhone = watch("hasPhone");
  const normolizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    }
    return phoneNumber.formatInternational();
  };
  const onSubmit = (data) => {
    navigate("/form/step-3");
    setValues(data);
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="step2">
      <TextField
        {...register("email")}
        type="email"
        name="email"
        label="Email"
        required
        error={!!errors.email} 
        helperText={errors?.email?.message}
      />
      <FormControlLabel
        {...register("hasPhone")}
        name="hasPhone"
        control={<Checkbox defaultValue={data?.hasPhone}  defaultChecked={data?.hasPhone} />}
        label="Do you have a phone number?"
      />
      {hasPhone && (
        <TextField
          error={!!errors.phone}
          helperText={errors?.phone?.message}
          label="Phone number"
          type="tel"
          name="phone"
          {...register("phone")}
          onChange={(event) => {
            event.target.value = normolizePhoneNumber(event.target.value);
          }}
        />
      )}
      <div className="">
        <Button variant="contained" type="submit">
          Go next
        </Button>
      </div>
    </form>
  );
};

export default FormStep2;

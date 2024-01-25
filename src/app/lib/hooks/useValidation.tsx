import * as Joi from "joi";
import { useState } from "react";
import { InputError } from "../../components/common/input-error";
import * as React from "react";

export const useValidation = (schema: Joi.ObjectSchema<any>, defaultValues: any) => {
  const [errors, setErrors] = useState<any>({});
  const [values, setValues] = useState<any>(defaultValues);

  const isValid = () => {
    const options = { abortEarly: false };
    const { error } = schema.validate(values, options);
    if (!error) {
      return true;
    }
    const errors = {} as any;
    for (let item of error.details) errors[item.path[0]] = item.message;
    setErrors(errors);
    return false;
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    let errorData: any = { ...errors };
    const errorMessage = validateProperty(name, value);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let userData: any = { ...values };
    userData[name] = value;
    setValues(userData);
    setErrors(errorData);
  };

  const validateProperty = (name: string, value: any) => {
    if (!name) {
      return null;
    }
    const options = { abortEarly: false };
    const { error } = schema.extract(name).validate(value, options);
    console.log(error?.details);
    return error ? error.details[0].message : null;
  };

  const showError = (name: string) => {
    if (errors[name]) return <InputError error={errors[name]} />;

    return null;
  }

  return { isValid, handleChange, showError, errors, values };
}
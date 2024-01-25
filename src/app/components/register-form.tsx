'use client';

import { useState } from "react";
import { registerStudent } from "../lib/actions/student-actions"
import { Form } from "./common/form";
import { FormField } from "./common/form-field";
import { useValidation } from "../lib/hooks/useValidation";
import Joi from "joi";
import { Button } from "./common/button";
import { ErrorIndicator } from "./common/error-indicator";
import { districts } from "../lib/data/districts";
import { useHttp } from "../lib/hooks/useHttp";

type FormDataType = {
  name: string,
  school: string,
  gender: string,
  mobile: string,
  whatsapp: string,
  district: string,
  address: string,
  email: string
}

const phoneRegex = new RegExp('^0[1-9]{1}[0-9]{7,9}');

const schema = Joi.object({
  name: Joi.string().label('Name').required().min(12),
  dob: Joi.string().label('Date of Birth').required().isoDate().message('Not a valid date format'),
  gender: Joi.string().label('Gender').required().valid('male', 'female'),
  mobile: Joi.string().label('Mobile').required().regex(phoneRegex).message('Not a valid mobile no'),
  whatsapp: Joi.string().label('WhatsApp').required().regex(phoneRegex).message('Not a valid WhatsApp no'),
  email: Joi.string().label('Email').required().email({ tlds: { allow: false } }),
  password: Joi.string().label('Password').required()
});

export const RegisterForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const { handleChange, isValid, values, errors } = useValidation(schema, {});
  const [alert, setAlert] = useState('');
  const { httpPost } = useHttp();

  const submit = async (event: any) => {
    event.preventDefault();
    setSubmitting(true);
    if (!isValid()) {
      setSubmitting(false);
      setAlert('Please correct the invalid fields and try again.');
      return;
    }

    httpPost('/api/register', values)
      .then((data) => {
        console.log(data);
      })
      .catch(response => {
        console.log(response.error.message);
      })
      .finally(() => setSubmitting(false));
  }

  return <>
    <Form formData={{ values, errors }} onSubmit={submit}>
      <FormField name="name" title="Name">
        <input
          type="text"
          name="name"
          autoFocus={true}
          defaultValue={values?.name}
          onChange={handleChange}
        />
      </FormField>
      <FormField name="email" title="Email">
        <input
          type="email"
          name="email"
          defaultValue={values?.email}
          onChange={handleChange}
        />
      </FormField>
      <div className="flex gap-3">
        <FormField name="dob" title="Date of Birth">
          <input
            type="date"
            name="dob"
            defaultValue={values?.dob}
            onChange={handleChange}
          />
        </FormField>
        <FormField name="gender" title="Gender">
          <div className="flex gap-2 py-2">
            <div className="flex">
              <input
                id="maleId"
                name="gender"
                type="radio"
                value="male"
                defaultValue={values?.gender}
                onChange={handleChange}
              />
              <label htmlFor="maleId">Male</label>
            </div>
            <div className="flex">
              <input
                id="femaleId"
                name="gender"
                type="radio"
                value="female"
                defaultValue={values?.gender}
                onChange={handleChange}
              />
              <label htmlFor="femaleId">Female</label>
            </div>
          </div>
        </FormField>
      </div>
      <div className="flex gap-3">
        <FormField name="mobile" title="Mobile">
          <input
            type="text"
            name="mobile"
            defaultValue={values?.mobile}
            onChange={handleChange}
          />
        </FormField>
        <FormField name="whatsapp" title="WhatsApp">
          <input
            type="text"
            name="whatsapp"
            defaultValue={values?.whatsapp}
            onChange={handleChange}
          />
        </FormField>
      </div>
      <hr className="my-3" />
      <FormField name="password" title="Password">
        <input
          type="password"
          name="password"
          defaultValue={values?.password}
          onChange={handleChange}
        />
        <small>Allowed letters, numbers and special characters. Minimum 8 characters long.</small>
      </FormField>
      <div className="flex justify-end mb-3">
        <Button type="submit" disabled={submitting} className="px-5">Register</Button>
      </div>
      {alert && ErrorIndicator({ message: alert })}
    </Form>
  </>
}